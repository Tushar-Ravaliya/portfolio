"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/portfolio";

export function CopyEmail() {
  const [message, setMessage] = useState("Copy email");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  async function copy() {
    if (timeout.current) clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Email copied ✓");
    } catch {
      setMessage("Select the email to copy");
    }
    timeout.current = setTimeout(() => setMessage("Copy email"), 3500);
  }
  return (
    <button className="copy-email mono" onClick={copy}>
      <span aria-live="polite">{message}</span>
      <span aria-hidden="true">⧉</span>
    </button>
  );
}
