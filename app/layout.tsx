import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/lib/portfolio";
import "./globals.css";
import "./experiments.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl || "http://localhost:3000"),
  title: {
    default: "Tushar Ravaliya — Curiosity, in working form.",
    template: "%s — Tushar Ravaliya",
  },
  description:
    "The working journal of Tushar Ravaliya, a developer and Computer Engineering student. Explore full-stack projects, creative coding, and the questions behind the work.",
  authors: [{ name: profile.name }],
  ...(profile.siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tushar Ravaliya — Working Form",
    title: "Curiosity, in working form.",
    description:
      "Projects, experiments, and a sense of wonder. The portfolio of Tushar Ravaliya.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#f4f1e9" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
