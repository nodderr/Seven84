import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = [
  { in: 'Media/Indian Rock - Waves 24', out: 'public/gallery/events/waves-24-indian-rock' },
  { in: 'Media/SOTA - Waves 24', out: 'public/gallery/events/waves-24-silence-amps' }
];

async function processImages() {
  for (const dir of dirs) {
    const inDir = path.resolve(dir.in);
    const outDir = path.resolve(dir.out);

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    if (!fs.existsSync(inDir)) {
      console.log(`Input directory not found: ${dir.in}`);
      continue;
    }

    const files = fs.readdirSync(inDir).filter(f => f.match(/\.(jpe?g|png)$/i));
    for (const file of files) {
      const inFile = path.join(inDir, file);
      const outFile = path.join(outDir, `${path.parse(file).name}.webp`);

      await sharp(inFile)
        .webp({ quality: 80 })
        .resize(1200, null, { withoutEnlargement: true }) // resize to a reasonable max width
        .toFile(outFile);

      console.log(`Converted: ${outFile}`);
    }
  }
}

processImages().then(() => console.log('Done')).catch(console.error);
