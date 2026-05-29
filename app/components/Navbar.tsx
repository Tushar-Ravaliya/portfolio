"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "py-3 bg-bg-primary/90 backdrop-blur-[20px] border-b border-border"
          : "py-5 bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-[24px] sm:text-[28px] font-extrabold font-heading text-text-primary no-underline tracking-[-1px]"
        >
          Tushar Ravaliya
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`text-[13px] font-medium tracking-[0.5px] no-underline relative pb-1 transition-colors duration-300 hover:text-text-primary ${
                activeLink === link.label
                  ? "text-text-primary"
                  : "text-text-secondary"
              }`}
            >
              {link.label}
              {activeLink === link.label && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-accent rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-text-primary text-bg-primary rounded-full text-[13px] font-semibold no-underline transition-all duration-300 hover:bg-accent"
        >
          LET&apos;S TALK
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-transparent border-none text-text-primary cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-5 bg-bg-primary/[0.98] border-t border-border flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMobileOpen(false);
              }}
              className={`text-sm font-medium no-underline py-2 ${
                activeLink === link.label
                  ? "text-accent"
                  : "text-text-secondary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-text-primary text-bg-primary rounded-full text-[13px] font-semibold no-underline mt-2"
          >
            LET&apos;S TALK
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
}
