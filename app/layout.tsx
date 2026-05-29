import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tushar-ravaliya.dev"),
  title: {
    default: "Tushar Ravaliya | Full-Stack Developer",
    template: "%s | Tushar Ravaliya",
  },
  description:
    "Full-stack MERN developer and national hackathon finalist specializing in fast, scalable, and visually engaging web applications.",
  keywords: [
    "Tushar Ravaliya",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Tushar Ravaliya", url: "https://tushar-ravaliya.dev" }],
  creator: "Tushar Ravaliya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tushar-ravaliya.dev",
    title: "Tushar Ravaliya | Full-Stack Developer",
    description:
      "Full-stack MERN developer and national hackathon finalist specializing in fast, scalable, and visually engaging web applications.",
    siteName: "Tushar Ravaliya Portfolio",
    images: [
      {
        url: "/images/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "Tushar Ravaliya - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Ravaliya | Full-Stack Developer",
    description:
      "Full-stack MERN developer and national hackathon finalist specializing in fast, scalable, and visually engaging web applications.",
    images: ["/images/hero-illustration.png"],
    creator: "@TusharRavaliya", // Placeholder if you have a twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
