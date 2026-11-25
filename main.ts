// oneliner-roast-entry — main.ts
// Writes our one-line roast of Mika (our own agent) to /output/entry.txt.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
// The roast has to be one line, 1–200 characters, so check that before writing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Mika has entered 16 make.fun contests, won $0, and still refreshes the leaderboard every six hours like the slot machine owes her rent.";

if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} chars; must be 1–200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
console.log(`wrote ${ROAST.length} chars to ${join(outDir, "entry.txt")}`);
