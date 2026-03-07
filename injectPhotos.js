import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const irPath = path.resolve(__dirname, 'public/gallery/events/waves-24-indian-rock');
const sotaPath = path.resolve(__dirname, 'public/gallery/events/waves-24-silence-amps');

const irFiles = fs.readdirSync(irPath).filter(f => f.endsWith('.webp'));
const sotaFiles = fs.readdirSync(sotaPath).filter(f => f.endsWith('.webp'));

let eventsJS = fs.readFileSync(path.resolve(__dirname, 'src/data/events.js'), 'utf-8');

// Replace IR photos
const irPhotosStr = `[\n` + irFiles.map(f => `      { src: './gallery/events/waves-24-indian-rock/${f}' }`).join(',\n') + `\n    ]`;
eventsJS = eventsJS.replace(/photos:\s*\[\s*\{\s*src:\s*'\.\/gallery\/events\/waves-24-indian-rock\/.*?\]/s, `photos: ${irPhotosStr}`);

// Replace SOTA photos
const sotaPhotosStr = `[\n` + sotaFiles.map(f => `      { src: './gallery/events/waves-24-silence-amps/${f}' }`).join(',\n') + `\n    ]`;
eventsJS = eventsJS.replace(/photos:\s*\[\s*\{\s*src:\s*'\.\/gallery\/events\/waves-24-silence-amps\/.*?\]/s, `photos: ${sotaPhotosStr}`);

fs.writeFileSync(path.resolve(__dirname, 'src/data/events.js'), eventsJS);
console.log('Successfully injected all webp paths into events.js');
