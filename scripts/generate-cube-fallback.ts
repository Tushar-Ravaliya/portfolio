import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { projectMechanicalCube } from "../lib/mechanical-geometry";

// Run after changing the model: bun scripts/generate-cube-fallback.ts
const faces = projectMechanicalCube();
const gradients = faces.map((face, i) =>
  `<linearGradient id="cube-${i}" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="${face.lightColor}"/><stop offset="1" stop-color="${face.color}"/></linearGradient>`,
).join("");
const polygons = faces
  .map(
    (face, i) =>
      `<polygon points="${face.points.map((point) => point.map((v) => v.toFixed(4)).join(",")).join(" ")}" fill="url(#cube-${i})" stroke="${face.color}" stroke-width=".003"/>`,
  )
  .join("");
writeFileSync(
  resolve(import.meta.dirname, "../public/mechanical-cube.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs>${gradients}</defs><g transform="translate(250 235) scale(96.5)">${polygons}</g></svg>`,
);
