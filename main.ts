import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const currentDir = import.meta.dirname ?? dirname(process.argv[1]);
const sourcePath = join(currentDir, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
// Read exact binary bytes of entry.png and write unchanged to destination
const bytes = readFileSync(sourcePath);
writeFileSync(targetPath, bytes);
