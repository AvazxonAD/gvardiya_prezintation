/**
 * Taqdimot uchun oddiy statik server.
 * Tashqi paket ishlatilmaydi — faqat Node'ning o'zi. `npm install` kerak emas.
 *
 *   npm start           -> http://localhost:9999
 *   npm start -- 8080   -> boshqa portda
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = __dirname;
const START_PORT = Number(process.argv[2] || process.env.PORT || 9999);
const OPEN = process.env.NO_OPEN !== "1";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  if (urlPath === "/") urlPath = "/index.html";

  /* Papkadan tashqariga chiqishga yo'l qo'ymaymiz */
  const filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Topilmadi: " + urlPath);
      return;
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

/* Port band bo'lsa keyingisini sinaymiz */
let port = START_PORT;
server.on("error", (e) => {
  if (e.code === "EADDRINUSE" && port < START_PORT + 20) {
    console.log(`  ${port} band, ${port + 1} ni sinayapman...`);
    server.listen(++port, "127.0.0.1");
  } else {
    console.error("Xato:", e.message);
    process.exit(1);
  }
});

server.listen(port, "127.0.0.1", () => {
  const url = `http://localhost:${port}`;
  console.log("");
  console.log("  JSTB Murojaat Portali — taqdimot");
  console.log("  " + url);
  console.log("");
  console.log("  To'xtatish: Ctrl+C");
  console.log("");

  if (OPEN) {
    const cmd =
      process.platform === "win32" ? ["cmd", ["/c", "start", "", url]]
      : process.platform === "darwin" ? ["open", [url]]
      : ["xdg-open", [url]];
    try {
      spawn(cmd[0], cmd[1], { detached: true, stdio: "ignore" }).unref();
    } catch {
      /* brauzerni ocha olmadik — muhim emas, havola tepada */
    }
  }
});
