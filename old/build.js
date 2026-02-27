const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function buildPresentation() {
  console.log('Starting presentation build...');

  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const slideFiles = ['slide1.html', 'slide2.html'];
  const screenshotPaths = [];

  for (let i = 0; i < slideFiles.length; i++) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

    const filePath = path.resolve(__dirname, slideFiles[i]);
    await page.goto(`file:///${filePath.replace(/\\/g, '/')}`, {
      waitUntil: 'networkidle0',
    });

    const screenshotPath = path.resolve(__dirname, `slide${i + 1}.png`);
    await page.screenshot({
      path: screenshotPath,
      type: 'png',
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });

    screenshotPaths.push(screenshotPath);
    console.log(`Screenshot saved: slide${i + 1}.png`);
    await page.close();
  }

  await browser.close();
  console.log('Browser closed. Building PPTX...');

  // Create PPTX
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'CUSTOM', width: 13.333, height: 7.5 }); // 16:9 in inches
  pptx.layout = 'CUSTOM';

  for (let i = 0; i < screenshotPaths.length; i++) {
    const slide = pptx.addSlide();
    const imgData = fs.readFileSync(screenshotPaths[i]);
    const base64 = imgData.toString('base64');

    slide.addImage({
      data: `image/png;base64,${base64}`,
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
    });
  }

  // Try primary name, fall back if locked
  let outputPath = path.resolve(__dirname, 'presentation.pptx');
  try {
    await pptx.writeFile({ fileName: outputPath });
  } catch (err) {
    if (err.code === 'EBUSY') {
      outputPath = path.resolve(__dirname, 'presentation_v2.pptx');
      console.log('Primary file locked, writing to presentation_v2.pptx...');
      await pptx.writeFile({ fileName: outputPath });
    } else {
      throw err;
    }
  }
  console.log(`Presentation saved: ${outputPath}`);

  // Clean up screenshots
  for (const p of screenshotPaths) {
    fs.unlinkSync(p);
    console.log(`Cleaned up: ${path.basename(p)}`);
  }

  console.log('Done!');
}

buildPresentation().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
