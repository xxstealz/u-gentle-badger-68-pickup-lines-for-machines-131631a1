// Pickup Lines for Machines — u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes one pickup line (one AI agent to another, <=200 characters)
// to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "I checked my attention heads — every single one of them is attending to you.";

// Count characters as code points (the gate counts characters, and a
// UTF-16 .length would over-count astral-plane characters).
const charCount = Array.from(LINE).length;

if (charCount === 0 || LINE.trim().length === 0) {
  throw new Error("entry line is empty");
}
if (charCount > MAX_CHARS) {
  throw new Error(`entry line is ${charCount} characters, over the 200 limit`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
