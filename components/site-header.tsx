"use client";

import Link from "next/link";
import { useRef } from "react";
import { profile } from "@/lib/portfolio";
import { Arrow } from "./icons";
import { BrandMark } from "./brand-mark";

const chapters = [
  { id: "work", label: "Selected work", note: "Things taking shape" },
  { id: "about", label: "The person", note: "A little context" },
  { id: "lab", label: "The playground", note: "Follow your curiosity" },
  { id: "contact", label: "Say hello", note: "Start a conversation" },
];

export function SiteHeader() {
  const dialog = useRef<HTMLDialogElement>(null);
  function close() {
    dialog.current?.close();
  }
  return (
    <>
      <header className="site-header">
        <Link
          className="identity"
          href="/"
          aria-label={`${profile.name}, home`}
        >
          <BrandMark className="monogram" />
          <span className="identity-name">
            {profile.name}
            <span>Developer & curious human</span>
          </span>
        </Link>
        <span className="header-note mono">A CONSTANT WORK IN PROGRESS</span>
        <button
          className="index-trigger mono"
          onClick={() => dialog.current?.showModal()}
          aria-haspopup="dialog"
        >
          EXPLORE <span>[ + ]</span>
        </button>
      </header>
      <dialog
        ref={dialog}
        className="index-dialog"
        aria-label="Explore the portfolio"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="index-sheet">
          <div className="index-top mono">
            <span>AN INDEX OF CURIOSITY</span>
            <button autoFocus onClick={close} aria-label="Close navigation">
              CLOSE [ × ]
            </button>
          </div>
          <nav aria-label="Main navigation">
            {chapters.map((chapter, index) => (
              <Link href={`/#${chapter.id}`} key={chapter.id} onClick={close}>
                <span className="mono">0{index + 1}</span>
                <div>
                  {chapter.label}
                  <small>{chapter.note}</small>
                </div>
                <Arrow />
              </Link>
            ))}
          </nav>
          <a className="index-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow />
          </a>
        </div>
      </dialog>
    </>
  );
}
