"use client";

import { useEffect, useRef } from "react";
import { projectMechanicalCube } from "@/lib/mechanical-geometry";

export default function MechanicalCanvas({
  exploded,
  paused,
  onReady,
}: {
  exploded: boolean;
  paused: boolean;
  onReady: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useRef({ exploded, paused });
  const wake = useRef<() => void>(() => {});
  useEffect(() => {
    controls.current = { exploded, paused };
    wake.current();
  }, [exploded, paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      width = 0,
      height = 0,
      visible = true,
      previous = 0,
      phase = 0;
    let separation = controls.current.exploded ? 1 : 0,
      x = 0,
      y = 0,
      pointerX = 0,
      pointerY = 0;
    let ready = false;
    function draw(time: number) {
      if (!context || !canvas || !width || !height) return;
      const delta = Math.min(time - previous, 64);
      previous = time;
      const still = controls.current.paused || reduced.matches,
        target = controls.current.exploded ? 1 : 0;
      if (still) {
        separation = target;
        if (reduced.matches) { x = 0; y = 0; }
      } else {
        phase += delta * 0.0002;
        const easing = 1 - Math.exp(-delta / 200);
        separation += (target - separation) * easing;
        x += (pointerX - x) * easing;
        y += (pointerY - y) * easing;
      }
      context.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) * (0.235 - separation * 0.042);
      const faces = projectMechanicalCube(
        separation,
        -0.64 + x * 0.3 + (reduced.matches ? 0 : Math.sin(phase) * 0.035),
        -0.5 + y * 0.16,
      );
      context.lineWidth = 0.3;
      for (const face of faces) {
        const points = face.points.map(([a, b]) => [width / 2 + a * scale, height * 0.47 + b * scale]);
        context.beginPath();
        points.forEach(([px, py], i) => {
          if (i === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        });
        context.closePath();
        const gradient = context.createLinearGradient(
          Math.min(...points.map(([a]) => a)), Math.min(...points.map(([, b]) => b)),
          Math.max(...points.map(([a]) => a)), Math.max(...points.map(([, b]) => b)),
        );
        gradient.addColorStop(0, face.lightColor);
        gradient.addColorStop(1, face.color);
        context.fillStyle = gradient;
        context.strokeStyle = face.color;
        context.fill();
        context.stroke();
      }
      if (!ready) {
        ready = true;
        onReady();
      }
    }
    function tick(time: number) {
      if (time - previous >= 1000 / 30) draw(time);
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      if (!visible || document.hidden) return;
      previous = performance.now() - 32;
      draw(performance.now());
      if (!controls.current.paused && !reduced.matches)
        frame = requestAnimationFrame(tick);
    }
    wake.current = sync;
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      sync();
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    const stage = canvas.parentElement!;
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointerX = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
      pointerY = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
    };
    const leave = () => {
      pointerX = 0;
      pointerY = 0;
    };
    resize.observe(canvas);
    observer.observe(canvas);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    return () => {
      wake.current = () => {};
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
    };
  }, [onReady]);
  return <canvas ref={canvasRef} className="form-canvas" aria-hidden="true" />;
}
