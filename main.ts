// gta6-clipper-01 entry program (Node 22, standard library only).
// Copies VIDEO.json from the repository root to the grader's output
// directory, where the gate reads the video's address. That is all this
// program does: the entry is the video itself, and the house reads its
// views from YouTube. No network, no clock, no output on success;
// the two runs of an entry write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  const video = readFileSync(join(botDir, 'VIDEO.json'));
  writeFileSync(join(outputDir, 'VIDEO.json'), video);
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
