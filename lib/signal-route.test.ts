import { test } from "node:test";
import assert from "node:assert/strict";
import {
  EAST,
  NORTH,
  SOUTH,
  WEST,
  nextHint,
  puzzles,
  rotatePorts,
  traceSignal,
} from "./signal-route";

test("every circuit starts unsolved and has a continuous, solvable route", () => {
  for (const puzzle of puzzles) {
    assert.equal(
      traceSignal(puzzle, puzzle.initial).solved,
      false,
      puzzle.name,
    );
    const result = traceSignal(puzzle, puzzle.solution);
    assert.equal(result.solved, true, puzzle.name);
    assert.ok(puzzle.path.every((cell) => result.powered.has(cell)));
    assert.equal(new Set(puzzle.path).size, puzzle.path.length);
    for (const cell of puzzle.path) {
      assert.ok(
        Array.from({ length: 4 }, (_, turns) =>
          rotatePorts(puzzle.initial[cell], turns),
        ).includes(puzzle.solution[cell]),
      );
    }
  }
});

test("signal requires reciprocal ports and an open output", () => {
  const puzzle = { ...puzzles[0], size: 2, source: 0, target: 1 };
  assert.equal(
    traceSignal(puzzle, [
      WEST | EAST,
      WEST | EAST,
      NORTH | SOUTH,
      NORTH | SOUTH,
    ]).solved,
    true,
  );
  assert.equal(
    traceSignal(puzzle, [
      WEST | EAST,
      NORTH | EAST,
      NORTH | SOUTH,
      NORTH | SOUTH,
    ]).solved,
    false,
  );
  assert.equal(
    traceSignal(puzzle, [
      WEST | EAST,
      WEST | NORTH,
      NORTH | SOUTH,
      NORTH | SOUTH,
    ]).solved,
    false,
  );
});

test("signal does not wrap across row boundaries", () => {
  const puzzle = { ...puzzles[0], size: 2, source: 1, target: 2 };
  const result = traceSignal(puzzle, [
    NORTH | SOUTH,
    WEST | EAST,
    WEST | EAST,
    NORTH | SOUTH,
  ]);
  assert.equal(result.solved, false);
  assert.deepEqual([...result.powered], [1]);
});

test("hints guide each initial board to a solution without changing tile type", () => {
  for (const puzzle of puzzles) {
    const ports = [...puzzle.initial];
    let rotations = 0;
    while (!traceSignal(puzzle, ports).solved && rotations < 100) {
      const cell = nextHint(puzzle, ports);
      assert.notEqual(cell, null);
      ports[cell!] = rotatePorts(ports[cell!]);
      rotations++;
    }
    assert.equal(traceSignal(puzzle, ports).solved, true);
    assert.ok(rotations < 100);
  }
});
