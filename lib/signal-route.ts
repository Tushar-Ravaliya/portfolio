/** Clockwise ports: north, east, south, west. All levels are deterministic. */
export const NORTH = 1,
  EAST = 2,
  SOUTH = 4,
  WEST = 8;
export const DIRECTIONS = [NORTH, EAST, SOUTH, WEST];
export type Puzzle = {
  name: string;
  subtitle: string;
  size: number;
  source: number;
  target: number;
  path: number[];
  solution: number[];
  initial: number[];
};

export function rotatePorts(ports: number, turns = 1) {
  for (let i = 0; i < ((turns % 4) + 4) % 4; i++)
    ports = ((ports << 1) & 15) | (ports >> 3);
  return ports;
}

function makePuzzle(
  name: string,
  subtitle: string,
  size: number,
  coordinates: [number, number][],
  seed: number,
): Puzzle {
  const path = coordinates.map(([row, col]) => row * size + col);
  const solution = Array.from({ length: size * size }, (_, i) =>
    rotatePorts(i % 3 === 0 ? NORTH | SOUTH : NORTH | EAST, (i + seed) % 4),
  );
  const portTo = (from: number, to: number) =>
    to === from - size
      ? NORTH
      : to === from + size
        ? SOUTH
        : to === from - 1
          ? WEST
          : EAST;
  path.forEach((cell, i) => {
    solution[cell] =
      (i === 0 ? WEST : portTo(cell, path[i - 1])) |
      (i === path.length - 1 ? EAST : portTo(cell, path[i + 1]));
  });
  const initial = solution.map((ports, i) =>
    rotatePorts(ports, (i * 7 + seed) % 4),
  );
  // The source always begins disconnected so no puzzle can start completed.
  initial[path[0]] = solution[path[0]];
  while (initial[path[0]] & WEST)
    initial[path[0]] = rotatePorts(initial[path[0]]);
  return {
    name,
    subtitle,
    size,
    source: path[0],
    target: path[path.length - 1],
    path,
    solution,
    initial,
  };
}

export const puzzles: Puzzle[] = [
  makePuzzle(
    "First contact",
    "A few turns. One connection.",
    4,
    [
      [1, 0],
      [1, 1],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [2, 3],
    ],
    1,
  ),
  makePuzzle(
    "The scenic route",
    "The shortest line isn’t always straight.",
    5,
    [
      [2, 0],
      [1, 0],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 2],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 4],
    ],
    3,
  ),
  makePuzzle(
    "Beautiful detour",
    "A little patience closes the loop.",
    5,
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 4],
      [2, 4],
      [2, 3],
      [3, 3],
      [3, 2],
      [2, 2],
      [2, 1],
      [3, 1],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ],
    2,
  ),
];

export function traceSignal(puzzle: Puzzle, ports: number[]) {
  const powered = new Set<number>();
  if (!(ports[puzzle.source] & WEST)) return { powered, solved: false };
  const queue = [puzzle.source];
  powered.add(puzzle.source);
  for (let step = 0; step < queue.length; step++) {
    const cell = queue[step],
      row = Math.floor(cell / puzzle.size),
      col = cell % puzzle.size;
    const neighbors = [
      row > 0 ? cell - puzzle.size : -1,
      col < puzzle.size - 1 ? cell + 1 : -1,
      row < puzzle.size - 1 ? cell + puzzle.size : -1,
      col > 0 ? cell - 1 : -1,
    ];
    neighbors.forEach((next, d) => {
      if (
        next < 0 ||
        powered.has(next) ||
        !(ports[cell] & DIRECTIONS[d]) ||
        !(ports[next] & DIRECTIONS[(d + 2) % 4])
      )
        return;
      powered.add(next);
      queue.push(next);
    });
  }
  return {
    powered,
    solved: powered.has(puzzle.target) && Boolean(ports[puzzle.target] & EAST),
  };
}

export function nextHint(puzzle: Puzzle, ports: number[]) {
  return (
    puzzle.path.find((cell) => ports[cell] !== puzzle.solution[cell]) ?? null
  );
}

export function describePorts(ports: number) {
  return ["up", "right", "down", "left"]
    .filter((_, i) => ports & DIRECTIONS[i])
    .join(" and ");
}
