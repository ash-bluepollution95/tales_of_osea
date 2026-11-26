#!/usr/bin/env node
// webp-diet.mjs — the "toy" (constitution, 2026-10-26):
// CLI forever. Resize + strip + re-encode. NEVER a cropper, no GUI upgrade path.
// Usage: node scripts/webp-diet.mjs <input-folder> <output-folder> [rename-pattern]
//
// Recipe = the site's own convention:
//   max 1920x1080 (fit inside, never upscale) · WebP q80 ·
//   EXIF/XMP stripped (sharp strips by default) · sRGB ICC baked.
//
// Optional rename-pattern: any string with a run of N's in it. The N's become
// a zero-padded counter, counting in alphabetical order of the source files:
//   "NN-full"     -> 01-full.webp, 02-full.webp, …
//   "atlanta-NNN" -> atlanta-001.webp, atlanta-002.webp, …
// Leave the pattern off to keep each file's original name.

import sharp from "sharp";
import { readdirSync, statSync, mkdirSync } from "fs";
import { join, extname, basename } from "path";

// The folders and optional pattern come from the command line:
// argv[2] = in, argv[3] = out, argv[4] = pattern (optional).
const inFolder = process.argv[2];
const outFolder = process.argv[3];
const pattern = process.argv[4];

if (!inFolder || !outFolder) {
  console.log(
    "Usage: node scripts/webp-diet.mjs <input-folder> <output-folder> [rename-pattern]",
  );
  process.exit(1);
}

// Only look at files a photo converter should touch.
const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
// .sort() makes the numbering predictable: rename counts in filename order.
const files = readdirSync(inFolder)
  .filter((f) => allowed.has(extname(f).toLowerCase()))
  .sort();
if (files.length === 0) {
  console.log("No image files found in", inFolder);
  process.exit(1);
}

mkdirSync(outFolder, { recursive: true });

let counter = 0;

for (const file of files) {
  const inPath = join(inFolder, file);
  // Pattern on? Build the name from it. Off? Keep the original name.
  const outName = pattern
    ? pattern.replace(/N+/g, (ns) =>
        String(counter + 1).padStart(ns.length, "0"),
      )
    : basename(file, extname(file));
  const outPath = join(outFolder, outName + ".webp");

  const before = statSync(inPath).size;
  await sharp(inPath)
    // fit "inside" scales down to fit the box WITHOUT cropping.
    // withoutEnlargement = if it's already smaller, leave it alone.
    .resize(1920, 1080, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    // Bake the sRGB color profile (the board's P1 rule).
    // EXIF/XMP: stripped automatically — sharp carries no metadata over.
    .withIccProfile("sRGB")
    .toFile(outPath);
  const after = statSync(outPath).size;

  const saved =
    before > after ? `(-${Math.round((1 - after / before) * 100)}%)` : "(no gain)";
  console.log(
    `${file} → ${outName}.webp:  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  ${saved}`,
  );
  counter++;
}
