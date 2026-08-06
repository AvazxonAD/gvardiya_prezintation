/**
 * Deck'ni PPTX ga eksport qiladi.
 *
 *   node build.js              -> taqdimot.pptx (o'zbekcha)
 *   node build.js --lang ru    -> taqdimot-ru.pptx
 *   node build.js --out my.pptx
 *
 * Ilgari bu skript slide1.html va slide2.html ni alohida suratga olardi va
 * qolgan slaydlarni umuman ko'rmasdi. Endi u index.html ni `?print` rejimida
 * ochadi: navigatsiya chromasi va animatsiya o'chadi, slaydlar soni esa
 * SLIDES dan olinadi — ya'ni yangi slayd qo'shsangiz, bu yerni tahrirlash
 * shart emas.
 */

const puppeteer = require("puppeteer");
const PptxGenJS = require("pptxgenjs");
const http = require("http");
const path = require("path");
const fs = require("fs");

const ROOT = __dirname;

/* --- Argumentlar ---------------------------------------------------------- */
const argv = process.argv.slice(2);
const argOf = (name, def) => {
  const i = argv.indexOf("--" + name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : def;
};
const LANG = argOf("lang", "uz");
const OUT = argOf("out", LANG === "uz" ? "taqdimot.pptx" : `taqdimot-${LANG}.pptx`);

/* --- Brauzer: puppeteer o'zinikini topolmasa, tizimdagisini ishlatamiz ----- */
const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  process.env.LOCALAPPDATA && process.env.LOCALAPPDATA + "/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

function resolveBrowser() {
  try {
    const p = puppeteer.executablePath();
    if (p && fs.existsSync(p)) return null; /* null = puppeteer o'zi hal qiladi */
  } catch {
    /* o'rnatilmagan — pastda qidiramiz */
  }
  for (const c of CANDIDATES) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error(
    "Chrome topilmadi. `npx puppeteer browsers install chrome` ni ishga tushiring\n" +
      "yoki CHROME_PATH muhit o'zgaruvchisida yo'lni ko'rsating."
  );
}

/* --- Kichik statik server (fayl file:// da modul yuklanishi cheklanadi) ---- */
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function startServer() {
  return new Promise((resolve, reject) => {
    const srv = http.createServer((req, res) => {
      const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
      const file = path.join(ROOT, url === "/" ? "/index.html" : url);
      if (!file.startsWith(ROOT)) return res.writeHead(403).end();
      fs.readFile(file, (err, data) => {
        if (err) return res.writeHead(404).end();
        res.writeHead(200, {
          "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
        });
        res.end(data);
      });
    });
    srv.on("error", reject);
    srv.listen(0, "127.0.0.1", () => resolve({ srv, port: srv.address().port }));
  });
}

/* --- Asosiy oqim ---------------------------------------------------------- */
async function build() {
  const exe = resolveBrowser();
  const { srv, port } = await startServer();
  console.log(`  Server: http://127.0.0.1:${port}`);

  const browser = await puppeteer.launch({
    headless: "new",
    ...(exe ? { executablePath: exe } : {}),
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--force-device-scale-factor=2"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  const problems = [];
  page.on("pageerror", (e) => problems.push(e.message));
  page.on("requestfailed", (r) => problems.push(r.url() + " — " + r.failure().errorText));

  /* Tilni oldindan qo'yamiz — deck uni localStorage dan o'qiydi */
  await page.evaluateOnNewDocument((lang) => {
    try {
      localStorage.setItem("pitch.lang", lang);
    } catch {}
  }, LANG);

  await page.goto(`http://127.0.0.1:${port}/index.html?print`, { waitUntil: "networkidle0" });

  const total = await page.evaluate(() => SLIDES.length);
  console.log(`  Slaydlar: ${total} (til: ${LANG})`);

  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "W16x9", width: 13.333, height: 7.5 });
  pptx.layout = "W16x9";

  for (let i = 0; i < total; i++) {
    await page.evaluate((n) => show(n), i);
    /* Slayd almashishi + shrift/SVG chizilishi tugashini kutamiz */
    await page.evaluate(
      () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    );
    await new Promise((r) => setTimeout(r, 250));

    const buf = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });

    pptx.addSlide().addImage({
      data: "image/png;base64," + buf.toString("base64"),
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
    });
    process.stdout.write(`  ✓ ${String(i + 1).padStart(2, "0")}/${total}\r`);
  }
  console.log("");

  await browser.close();
  srv.close();

  /* Fayl PowerPoint'da ochiq bo'lsa EBUSY qaytadi — nomini o'zgartiramiz */
  let outPath = path.resolve(ROOT, OUT);
  try {
    await pptx.writeFile({ fileName: outPath });
  } catch (err) {
    if (err && err.code === "EBUSY") {
      outPath = outPath.replace(/\.pptx$/, "-yangi.pptx");
      console.log("  Fayl band, boshqa nom bilan yozilmoqda...");
      await pptx.writeFile({ fileName: outPath });
    } else {
      throw err;
    }
  }

  console.log(`\n  Tayyor: ${outPath}`);
  if (problems.length) {
    console.log("\n  Diqqat — sahifada muammolar bo'ldi:");
    [...new Set(problems)].forEach((p) => console.log("    " + p));
  }
}

build().catch((err) => {
  console.error("\nEksport muvaffaqiyatsiz:", err.message);
  process.exit(1);
});
