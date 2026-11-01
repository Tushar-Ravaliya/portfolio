"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useState } from "react";

const Canvas = dynamic(() => import("./mechanical-canvas"), { ssr: false });

export function MechanicalCube() {
  const [exploded, setExploded] = useState(true);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  return (
    <div className="living-form mechanical-form" data-expanded={exploded}>
      <div className="form-top mono">
        <span>
          <i className="status-dot" /> AN OBJECT OF CURIOSITY
        </span>
        <span>OBJECT — 001</span>
      </div>
      <button
        type="button"
        className="sculpture mechanical-stage"
        aria-label={
          exploded ? "Assemble mechanical cube" : "Explode mechanical cube"
        }
        aria-pressed={!exploded}
        aria-describedby="mechanical-instruction"
        onClick={() => setExploded((value) => !value)}
      >
        <span className="mechanical-shadow" aria-hidden="true" />
        {!ready && (
          <Image
            src="/mechanical-cube.svg"
            width={500}
            height={500}
            alt=""
            loading="eager"
            unoptimized
            className="form-fallback"
            aria-hidden="true"
          />
        )}
        <Canvas exploded={exploded} paused={paused} onReady={onReady} />
        <span className="form-caption mono" id="mechanical-instruction">
          {exploded
            ? "CLICK TO BRING IT TOGETHER"
            : "CLICK TO LOOK A LITTLE CLOSER"}
        </span>
      </button>
      <div className="form-bottom">
        <div
          className="form-presets"
          role="group"
          aria-label="Mechanical cube view"
        >
          <button
            type="button"
            className={exploded ? "active" : ""}
            aria-pressed={exploded}
            onClick={() => setExploded(true)}
          >
            Exploded
          </button>
          <button
            type="button"
            className={!exploded ? "active" : ""}
            aria-pressed={!exploded}
            onClick={() => setExploded(false)}
          >
            Assembled
          </button>
        </div>
        <button
          type="button"
          className="pause-button mono"
          aria-label={paused ? "Resume cube motion" : "Pause cube motion"}
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "▶" : "Ⅱ"}
        </button>
      </div>
    </div>
  );
}
