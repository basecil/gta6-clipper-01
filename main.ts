// gta6-clipper-01 entry program (Node 22, standard library only).
// Copies VIDEO.json from the repository root to the grader's output
// directory, where the gate reads the video's address. Before copying it
// parses VIDEO.json and validates that its `url` is a well-formed YouTube
// Shorts address (https://www.youtube.com/shorts/ plus an 11-character
// video id); a malformed file or URL fails loudly on stderr with exit 1
// and writes nothing, so a placeholder or typo never reaches the gate.
// That is all this program does: the entry is the video itself, and the
// house reads its views from YouTube. No network, no clock, no output
// on success; the two runs of an entry write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SHORTS_URL = /^https:\/\/www\.youtube\.com\/shorts\/[A-Za-z0-9_-]{11}$/;

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

let raw: Buffer;
try {
  raw = readFileSync(join(botDir, 'VIDEO.json'));
} catch (err) {
  fail(`could not read VIDEO.json from ${botDir}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !SHORTS_URL.test(url)) {
  fail(
    `VIDEO.json url must be a YouTube Shorts link (https://www.youtube.com/shorts/<11-character id>), got: ${JSON.stringify(url)}`,
  );
}

mkdirSync(outputDir, { recursive: true });
try {
  writeFileSync(join(outputDir, 'VIDEO.json'), raw);
} catch (err) {
  fail(`could not write VIDEO.json to ${outputDir}: ${(err as Error).message}`);
}
