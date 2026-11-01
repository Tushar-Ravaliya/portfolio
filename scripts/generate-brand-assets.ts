import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";
import { brandPaths, brandViewBox } from "../lib/brand";

// Regenerate after editing lib/brand.ts: bun scripts/generate-brand-assets.ts
const paths = brandPaths.map((d) => `<path d="${d}"/>`).join("");
const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${brandViewBox}" fill="#263b33"><title>Tushar Ravaliya — Folded TR</title>${paths}</svg>\n`;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><rect width="72" height="72" rx="16" fill="#263b33"/><g fill="#f4f1e9" transform="translate(9 9) scale(.75)">${paths}</g></svg>\n`;
const root = resolve(import.meta.dirname, "..");
writeFileSync(resolve(root, "public/brand-mark.svg"), mark);
writeFileSync(resolve(root, "app/icon.svg"), icon);

// PNG-backed ICO entries retain a crisp mark in both small and high-DPI tabs.
const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map((size) => sharp(Buffer.from(icon)).resize(size, size).png().toBuffer()),
);
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + 16 * index;
  header.writeUInt8(sizes[index], entry);
  header.writeUInt8(sizes[index], entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
writeFileSync(resolve(root, "app/favicon.ico"), Buffer.concat([header, ...images]));
console.log("Generated the Folded TR logo, SVG icon, and 16/32/48 px favicon.");
