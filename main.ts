import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Group chat, c. 2023. A communal room where 47 people said good morning every day and never once met; the last message reads 'lol'.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("entry must be 1-200 characters, got " + TEXT.length);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT + "\n", "utf8");
