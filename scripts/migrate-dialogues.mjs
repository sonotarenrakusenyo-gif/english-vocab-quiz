/**
 * Converts legacy pattern.example strings into pattern.dialogue arrays.
 * Run: node scripts/migrate-dialogues.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WORDS, WORD_CATEGORIES } from "../data/words.js";
import { TURN1_LINES } from "../data/turn1-lines.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wordsPath = path.join(__dirname, "../data/words.js");

function parseTurn2(raw) {
  const match = raw.match(/^(.+?)（([^）]+)）$/s);
  if (!match) {
    return {
      english: raw.trim(),
      japanese: "",
      reading: "",
    };
  }

  return {
    english: match[1].trim(),
    japanese: match[2].trim(),
    reading: "",
  };
}

function buildTurn1(override, fallbackJapanese = "") {
  if (!override) {
    return {
      english: "",
      japanese: fallbackJapanese,
      reading: "",
    };
  }

  return {
    english: override.english,
    japanese: override.japanese,
    reading: override.reading ?? "",
  };
}

function parseLegacyExample(example, wordId, patternIndex) {
  const segments = [...example.matchAll(/「([^」]*)」/g)].map((match) => match[1]);
  const turn1Key = `${wordId}-${patternIndex}`;
  const turn1Override = TURN1_LINES[turn1Key];

  if (segments.length === 3) {
    const turn1 = buildTurn1(turn1Override, segments[0]);
    const turn2 = {
      english: segments[1],
      japanese: "いいよ。",
      reading: turn1Override?.reading2 ?? "",
    };
    const turn3 = parseTurn2(segments[2]);
    turn3.reading = turn1Override?.reading3 ?? "";
    return [turn1, turn2, turn3];
  }

  const turn1 = buildTurn1(turn1Override, segments[0] ?? "");
  const turn2 = parseTurn2(segments[1] ?? "");
  turn2.reading = turn1Override?.reading2 ?? "";
  return [turn1, turn2];
}

function escapeString(value) {
  return JSON.stringify(value);
}

function formatLine(line, indent) {
  return `${indent}{
${indent}  english: ${escapeString(line.english)},
${indent}  japanese: ${escapeString(line.japanese)},
${indent}  reading: ${escapeString(line.reading)},
${indent}}`;
}

function formatPattern(pattern, wordId, patternIndex, indent) {
  const dialogue = parseLegacyExample(pattern.example, wordId, patternIndex);
  const dialogueBlock = dialogue
    .map((line) => formatLine(line, `${indent}    `))
    .join(",\n");

  return `${indent}{
${indent}  usage: ${escapeString(pattern.usage)},
${indent}  dialogue: [
${dialogueBlock}
${indent}  ],
${indent}}`;
}

function formatWord(word) {
  const patterns = (word.patterns ?? [])
    .map((pattern, index) => formatPattern(pattern, word.id, index, "      "))
    .join(",\n");

  return `  {
    id: ${word.id},
    category: ${escapeString(word.category)},
    meaning: ${escapeString(word.meaning)},
    word: ${escapeString(word.word)},
    reading: ${escapeString(word.reading)},
    patterns: [
${patterns}
    ],
  }`;
}

function formatCategories(categories) {
  return categories
    .map(
      (category) => `  {
    id: ${escapeString(category.id)},
    label: ${escapeString(category.label)},
  }`,
    )
    .join(",\n");
}

const header = `export const WORD_CATEGORIES = [
${formatCategories(WORD_CATEGORIES)}
];

export const WORDS = [
`;

const body = WORDS.map((word) => formatWord(word)).join(",\n");
const footer = "\n];\n";

fs.writeFileSync(wordsPath, `${header}${body}${footer}`, "utf8");
console.log(`Updated ${wordsPath} with dialogue arrays for ${WORDS.length} words.`);
