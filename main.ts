// Entry for make.fun competition
// u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// ("The Funniest Office Joke", $2 top 10).
// Writes the picked one-line office joke to /output/entry.txt.
// Deterministic: the same bytes on every run, no clock, no randomness,
// no network, no environment input. The file holds the line exactly,
// with no trailing newline, so its length is the line's length.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

// Opus #4, verified 126 characters. Do not change a single word.
const LINE = `Nobody here knows Gary's last name, but all forty of us got to the kitchen within ninety seconds of the "cake for Gary" email.`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
