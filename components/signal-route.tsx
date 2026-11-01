"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import {
  describePorts,
  DIRECTIONS,
  nextHint,
  puzzles,
  rotatePorts,
  traceSignal,
} from "@/lib/signal-route";
import { FoldMark } from "./brand-mark";

const endpoints = [
  [50, 0],
  [100, 50],
  [50, 100],
  [0, 50],
];

export function SignalRoute() {
  const [level, setLevel] = useState(0);
  const [turns, setTurns] = useState<number[]>(puzzles[0].initial.map(() => 0));
  const [moves, setMoves] = useState(0);
  const [focusCell, setFocusCell] = useState(puzzles[0].source);
  const [hint, setHint] = useState<number | null>(null);
  const [sound, setSound] = useState(false);
  const [notice, setNotice] = useState("");
  const [completed, setCompleted] = useState<number[]>([]);
  const cells = useRef<(HTMLButtonElement | null)[]>([]);
  const audio = useRef<AudioContext | null>(null);
  const puzzle = puzzles[level];
  const ports = puzzle.initial.map((value, i) => rotatePorts(value, turns[i]));
  const { powered, solved } = traceSignal(puzzle, ports);

  useEffect(
    () => () => {
      void audio.current?.close();
    },
    [],
  );

  function playTone(success: boolean) {
    if (!sound || !audio.current) return;
    const context = audio.current;
    void context
      .resume()
      .then(() => {
        (success ? [440, 554, 659] : [330]).forEach((frequency, i) => {
          const oscillator = context.createOscillator(),
            gain = context.createGain();
          const start = context.currentTime + i * 0.09;
          oscillator.type = "sine";
          oscillator.frequency.value = frequency;
          gain.gain.setValueAtTime(0, start);
          gain.gain.linearRampToValueAtTime(0.035, start + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
          oscillator.connect(gain);
          gain.connect(context.destination);
          oscillator.start(start);
          oscillator.stop(start + 0.2);
          oscillator.onended = () => {
            oscillator.disconnect();
            gain.disconnect();
          };
        });
      })
      .catch(() => {
        setSound(false);
        setNotice("Sound is unavailable in this browser.");
      });
  }

  function rotateCell(index: number) {
    if (solved) return;
    const nextTurns = [...turns];
    nextTurns[index] += 1;
    const nextPorts = puzzle.initial.map((value, i) =>
      rotatePorts(value, nextTurns[i]),
    );
    const result = traceSignal(puzzle, nextPorts);
    setTurns(nextTurns);
    setMoves(moves + 1);
    setHint(null);
    setNotice("");
    if (result.solved)
      setCompleted((previous) =>
        previous.includes(level) ? previous : [...previous, level],
      );
    playTone(result.solved);
  }

  function loadLevel(index: number) {
    setLevel(index);
    setTurns(puzzles[index].initial.map(() => 0));
    setMoves(0);
    setHint(null);
    setFocusCell(puzzles[index].source);
    setNotice("");
  }

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const row = Math.floor(index / puzzle.size),
      col = index % puzzle.size;
    let next = index;
    if (event.key === "ArrowRight")
      next = row * puzzle.size + ((col + 1) % puzzle.size);
    else if (event.key === "ArrowLeft")
      next = row * puzzle.size + ((col + puzzle.size - 1) % puzzle.size);
    else if (event.key === "ArrowDown")
      next = ((row + 1) % puzzle.size) * puzzle.size + col;
    else if (event.key === "ArrowUp")
      next = ((row + puzzle.size - 1) % puzzle.size) * puzzle.size + col;
    else if (event.key === "Home") next = event.ctrlKey ? 0 : row * puzzle.size;
    else if (event.key === "End")
      next = event.ctrlKey ? ports.length - 1 : (row + 1) * puzzle.size - 1;
    else return;
    event.preventDefault();
    setFocusCell(next);
    cells.current[next]?.focus();
  }

  function showHint() {
    const index = nextHint(puzzle, ports);
    if (index === null) return;
    setHint(index);
    setFocusCell(index);
    cells.current[index]?.focus();
    setNotice(
      `Hint: rotate row ${Math.floor(index / puzzle.size) + 1}, column ${(index % puzzle.size) + 1} until it connects ${describePorts(puzzle.solution[index])}.`,
    );
  }

  async function toggleSound() {
    if (sound) {
      setSound(false);
      return;
    }
    try {
      audio.current ??= new AudioContext();
      await audio.current.resume();
      setSound(true);
      setNotice("");
    } catch {
      setNotice("Sound is unavailable in this browser. You can still play.");
    }
  }

  return (
    <div className={`signal-game ${solved ? "is-solved" : ""}`}>
      <div className="signal-label mono">
        <span>
          <i className="status-dot" /> PLAYABLE EXPERIMENT
        </span>
        <button
          className="sound-toggle"
          onClick={toggleSound}
          aria-pressed={sound}
          aria-label={sound ? "Turn game sound off" : "Turn game sound on"}
        >
          SOUND {sound ? "ON" : "OFF"}
        </button>
      </div>
      <div className="game-heading">
        <h3>
          Signal Route<span>↗</span>
        </h3>
        <span className="game-moves mono">
          <b>{String(moves).padStart(2, "0")}</b> TURNS
        </span>
      </div>
      <p className="game-instructions" id="route-instructions">
        Rotate the tiles. Connect <span>IN</span> to <span>OUT</span>.
      </p>
      <div className="game-levels" role="group" aria-label="Puzzle level">
        {puzzles.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={level === i}
            aria-label={`Level ${i + 1}: ${item.name}${completed.includes(i) ? ", completed" : ""}`}
            onClick={() => loadLevel(i)}
          >
            <span className="mono">0{i + 1}</span>
            <span>{item.name}</span>
            <span aria-hidden="true">{completed.includes(i) ? "✓" : "·"}</span>
          </button>
        ))}
      </div>
      <div
        className="route-board"
        role="group"
        aria-label={`${puzzle.size} by ${puzzle.size} circuit. ${puzzle.name}`}
        aria-describedby="route-instructions route-keyboard"
        style={{ "--board-size": puzzle.size } as CSSProperties}
      >
        {ports.map((value, index) => {
          const isSource = index === puzzle.source,
            isTarget = index === puzzle.target;
          return (
            <button
              key={`${level}-${index}`}
              ref={(node) => {
                cells.current[index] = node;
              }}
              tabIndex={index === focusCell ? 0 : -1}
              className={`route-tile ${powered.has(index) ? "is-powered" : ""} ${hint === index ? "is-hint" : ""} ${isSource ? "is-source" : ""} ${isTarget ? "is-target" : ""}`}
              aria-label={`Row ${Math.floor(index / puzzle.size) + 1}, column ${(index % puzzle.size) + 1}${isSource ? ", input" : ""}${isTarget ? ", output" : ""}. Connects ${describePorts(value)}. ${powered.has(index) ? "Powered." : "No signal."}${solved ? " Circuit complete." : " Rotate clockwise."}`}
              aria-disabled={solved}
              onFocus={() => setFocusCell(index)}
              onKeyDown={(event) => navigate(event, index)}
              onClick={() => rotateCell(index)}
            >
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <g
                  className="tile-traces"
                  style={{ transform: `rotate(${turns[index] * 90}deg)` }}
                >
                  {DIRECTIONS.map((direction, d) =>
                    puzzle.initial[index] & direction ? (
                      <path
                        key={d}
                        d={`M50 50L${endpoints[d][0]} ${endpoints[d][1]}`}
                      />
                    ) : null,
                  )}
                  <circle cx="50" cy="50" r="7" />
                </g>
                <circle className="tile-contact" cx="50" cy="50" r="2.5" />
              </svg>
              {isSource && (
                <span className="tile-terminal terminal-in mono">IN</span>
              )}
              {isTarget && (
                <span className="tile-terminal terminal-out mono">OUT</span>
              )}
            </button>
          );
        })}
      </div>
      <div
        className="game-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="game-status-mark" aria-hidden="true">
          {solved ? "✓" : "↳"}
        </span>
        <div>
          <strong>
            {solved
              ? completed.length === puzzles.length
                ? "Every connection counts. All three solved."
                : "Connection made. Nicely done."
              : "Find a way through."}
          </strong>
          <p>
            {solved
              ? `${puzzle.name} completed in ${moves} turns.`
              : notice || puzzle.subtitle}
          </p>
        </div>
      </div>
      <div className="game-actions">
        <button onClick={() => loadLevel(level)}>
          Restart <span aria-hidden="true">↺</span>
        </button>
        {solved ? (
          <button
            className="game-next"
            onClick={() => loadLevel((level + 1) % puzzles.length)}
          >
            {level === puzzles.length - 1 ? "Play again" : "Next circuit"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
        ) : (
          <button onClick={showHint}>
            A little hint <FoldMark width="14" height="17" />
          </button>
        )}
      </div>
      <p className="game-keyboard mono" id="route-keyboard">
        CLICK / TAP TO TURN · ARROW KEYS TO MOVE · ENTER TO TURN
      </p>
      <noscript>
        <p>Enable JavaScript to play Signal Route.</p>
      </noscript>
    </div>
  );
}
