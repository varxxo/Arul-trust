const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function generate() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  const files = fs.readdirSync(publicDir);
  const png = files.find((f) => f.toLowerCase().endsWith('.png'));
  if (!png) {
    console.error('No PNG found in public/. Place a high-resolution PNG (example: Aruleducation_favicon-removebg-preview.png)');
    process.exit(1);
  }

  const src = path.join(publicDir, png);
  console.log('Using source:', src);

  const metadata = await sharp(src).metadata();
  const min = Math.min(metadata.width, metadata.height);
  const left = Math.floor((metadata.width - min) / 2);
  const top = Math.floor((metadata.height - min) / 2);

  // create a sharp pipeline that is center-cropped to square
  const base = sharp(src).extract({ left, top, width: min, height: min }).png();

  const sizes = [512, 256, 128, 64, 48, 32, 16];
  const icoBuffers = [];

  for (const size of sizes) {
    const outPath = path.join(publicDir, `favicon-${size}.png`);
    const buffer = await base.clone().resize(size, size, { fit: 'cover' }).toBuffer();
    fs.writeFileSync(outPath, buffer);
    console.log('Wrote', outPath);
    if ([16, 32, 48, 64].includes(size)) icoBuffers.push(buffer);
  }

  // apple-touch-icon (180)
  const appleBuf = await base.clone().resize(180, 180, { fit: 'cover' }).toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleBuf);
  console.log('Wrote apple-touch-icon.png');

  // produce ico
  const ico = await toIco(icoBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
  console.log('Wrote favicon.ico');

  console.log('All favicons generated');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
