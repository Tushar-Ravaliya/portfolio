/** Solid geometry shared by the animated canvas and server-rendered fallback. */
export type Vec3 = [number, number, number];
type Face = {
  points: Vec3[];
  normal: Vec3;
  color: string;
  offset: Vec3;
  depthAnchor?: Vec3;
  enclosed?: boolean;
};
export type ProjectedFace = {
  points: [number, number][];
  color: string;
  lightColor: string;
  depth: number;
};

function createMechanicalCube(): Face[] {
  const faces: Face[] = [];
  function box(
    center: Vec3,
    size: Vec3,
    color: string,
    offset: Vec3 = [0, 0, 0],
    bevel = 0.035,
  ) {
    const half = size.map((v) => v / 2);
    // Surface markings are too thin to need bevels; skip their invisible faces.
    const b =
      Math.min(...half) < 0.01
        ? 0
        : Math.min(bevel, ...half.map((v) => v * 0.4));
    // Six inset faces, twelve bevels and eight corners catch the light.
    for (let axis = 0; axis < 3; axis++) {
      const u = (axis + 1) % 3,
        v = (axis + 2) % 3;
      for (const sign of [-1, 1]) {
        const normal: Vec3 = [0, 0, 0];
        normal[axis] = sign;
        const points = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ].map(([a, d]) => {
          const p = [...center] as Vec3;
          p[axis] += sign * half[axis];
          p[u] += a * (half[u] - b);
          p[v] += d * (half[v] - b);
          return p;
        });
        faces.push({ points, normal, color, offset });
      }
    }
    if (b === 0) return;
    for (let axis = 0; axis < 3; axis++) {
      const u = (axis + 1) % 3,
        v = (axis + 2) % 3;
      for (const a of [-1, 1])
        for (const d of [-1, 1]) {
          const normal: Vec3 = [0, 0, 0];
          normal[u] = a / Math.SQRT2;
          normal[v] = d / Math.SQRT2;
          const points = [
            [-1, 0],
            [1, 0],
            [1, 1],
            [-1, 1],
          ].map(([end, side]) => {
            const p = [...center] as Vec3;
            p[axis] += end * (half[axis] - b);
            p[u] += a * (half[u] - (side ? b : 0));
            p[v] += d * (half[v] - (side ? 0 : b));
            return p;
          });
          faces.push({ points, normal, color, offset });
        }
    }
    for (const a of [-1, 1])
      for (const d of [-1, 1])
        for (const e of [-1, 1]) {
          const signs = [a, d, e];
          const points = [0, 1, 2].map(
            (axis) =>
              center.map(
                (c, i) => c + signs[i] * (half[i] - (axis === i ? 0 : b)),
              ) as Vec3,
          );
          faces.push({
            points,
            normal: signs.map((s) => s / Math.sqrt(3)) as Vec3,
            color,
            offset,
          });
        }
  }
  function cylinder(
    center: Vec3,
    radius: number,
    length: number,
    axis: number,
    color: string,
    offset: Vec3 = [0, 0, 0],
  ) {
    const u = (axis + 1) % 3,
      v = (axis + 2) % 3,
      count = 12;
    const point = (angle: number, end: number): Vec3 => {
      const p = [...center] as Vec3;
      p[axis] += (end * length) / 2;
      p[u] += Math.cos(angle) * radius;
      p[v] += Math.sin(angle) * radius;
      return p;
    };
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2,
        b = ((i + 1) / count) * Math.PI * 2;
      const normal: Vec3 = [0, 0, 0];
      normal[u] = Math.cos((a + b) / 2);
      normal[v] = Math.sin((a + b) / 2);
      faces.push({
        points: [point(a, -1), point(b, -1), point(b, 1), point(a, 1)],
        normal,
        color,
        offset,
      });
    }
    for (const sign of [-1, 1]) {
      const normal: Vec3 = [0, 0, 0];
      normal[axis] = sign;
      faces.push({
        points: Array.from({ length: count }, (_, i) =>
          point((i / count) * Math.PI * 2, sign),
        ),
        normal,
        color,
        offset,
      });
    }
  }
  const ceramic = "#eee9dc",
    metal = "#a3aaa0",
    dark = "#263b33",
    accent = "#b8452b";
  box([0, 0, 0], [1.26, 1.26, 1.26], dark, undefined, 0.09);
  // A single copper seam provides a restrained accent around the green core.
  box([0, -0.26, 0], [1.285, 0.025, 1.285], accent, undefined, 0.006);
  for (const x of [-0.54, 0.54])
    for (const z of [-0.54, 0.54]) {
      cylinder([x, 0, z], 0.028, 1.62, 1, metal);
      cylinder([x, 0.72, z], 0.046, 0.12, 1, metal);
      cylinder([x, -0.72, z], 0.046, 0.12, 1, metal);
    }
  // Once closed, the casing fully conceals the internals. Omit those faces so
  // average-depth sorting cannot paint a hidden post over the lid.
  for (const face of faces) face.enclosed = true;
  // Each shell travels along its own normal when the assembly is exploded.
  for (let axis = 0; axis < 3; axis++)
    for (const sign of [-1, 1]) {
      const u = (axis + 1) % 3,
        v = (axis + 2) % 3;
      const offset: Vec3 = [0, 0, 0];
      offset[axis] = sign * (axis === 1 ? 0.76 : 0.5);
      const center: Vec3 = [0, 0, 0];
      center[axis] = sign * 0.9;
      const size: Vec3 = [1.7, 1.7, 1.7];
      size[axis] = 0.115;
      box(center, size, ceramic, offset, 0.045);
      const backing = [...center] as Vec3;
      backing[axis] -= sign * 0.078;
      const backingSize: Vec3 = [1.48, 1.48, 1.48];
      backingSize[axis] = 0.035;
      box(backing, backingSize, "#687267", offset, 0.012);
      // Coplanar markings sort immediately after their own shell face, avoiding
      // disappearing marks when a far corner lies behind the face's midpoint.
      function decal(polygon: number[][], color: string) {
        const normal: Vec3 = [0, 0, 0];
        normal[axis] = sign;
        const depthAnchor = [...center] as Vec3;
        depthAnchor[axis] += sign * 0.06;
        const points = polygon.map(([a, b]) => {
          const p = [...depthAnchor] as Vec3;
          p[u] = a;
          p[v] = b;
          return p;
        });
        faces.push({ points, normal, offset, color, depthAnchor });
      }
      // Two flush fasteners per face keep the construction legible and quiet.
      for (const [a, b] of [[-0.65, -0.65], [0.65, 0.65]]) {
        decal(Array.from({ length: 12 }, (_, i) => [
          a + Math.cos(i * Math.PI / 6) * 0.032,
          b + Math.sin(i * Math.PI / 6) * 0.032,
        ]), metal);
        decal([[a - 0.018, b - 0.003], [a + 0.018, b - 0.003],
          [a + 0.018, b + 0.003], [a - 0.018, b + 0.003]], "#727d72");
      }
      // Three shallow vents sit low on the side panels, leaving the lid clean.
      for (let n = 0; axis !== 1 && n < 3; n++) {
        const a = -0.2 + n * 0.1;
        decal([[a - 0.009, 0.15], [a + 0.009, 0.15],
          [a + 0.009, 0.45], [a - 0.009, 0.45]], "#969c8f");
      }
      // The two folded strokes tie the object to the portfolio's visual identity.
      const stamp = [
        [[-0.23, -0.25], [0.23, -0.25], [0.08, -0.1], [-0.23, -0.1]],
        [[-0.08, -0.04], [0.06, -0.04], [0.06, 0.14], [-0.08, 0.28]],
      ];
      for (const polygon of stamp) {
        decal(polygon.map(([a, b]) => [a + (axis === 1 ? 0 : 0.26),
          b - (axis === 1 ? 0 : 0.22)]), axis === 1 ? dark : accent);
      }
    }
  return faces;
}

function rotate([x, y, z]: Vec3, yaw: number, pitch: number): Vec3 {
  const a = x * Math.cos(yaw) + z * Math.sin(yaw),
    b = -x * Math.sin(yaw) + z * Math.cos(yaw);
  return [
    a,
    y * Math.cos(pitch) - b * Math.sin(pitch),
    y * Math.sin(pitch) + b * Math.cos(pitch),
  ];
}
const mechanicalCube = createMechanicalCube();

export function projectMechanicalCube(
  explosion = 1,
  yaw = -0.64,
  pitch = -0.5,
): ProjectedFace[] {
  const projected: ProjectedFace[] = [];
  for (const face of mechanicalCube) {
    if (face.enclosed && explosion < 0.025) continue;
    const normal = rotate(face.normal, yaw, pitch);
    if (normal[2] <= 0) continue;
    const light = Math.max(
      0,
      normal[0] * -0.35 + normal[1] * -0.65 + normal[2] * 0.68,
    );
    const channels = face.color.match(/[a-f\d]{2}/gi)!.map((c) => parseInt(c, 16));
    const shade = (lift: number) => `rgb(${channels.map((c) =>
      Math.min(255, Math.round(c * (0.76 + light * 0.25 + lift))),
    ).join(",")})`;
    let depth = 0;
    const points = face.points.map((p) => {
      const [x, y, z] = rotate(
        p.map((v, i) => v + face.offset[i] * explosion) as Vec3,
        yaw,
        pitch,
      );
      depth += z;
      const perspective = 9 / (9 - z * 0.28);
      return [x * perspective, y * perspective] as [number, number];
    });
    projected.push({
      points,
      color: shade(0),
      lightColor: shade(0.035),
      depth: face.depthAnchor
        ? rotate(face.depthAnchor.map((v, i) => v + face.offset[i] * explosion) as Vec3, yaw, pitch)[2]
        : depth / points.length,
    });
  }
  return projected.sort((a, b) => a.depth - b.depth);
}
