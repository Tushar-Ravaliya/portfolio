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
        url: "https://tushar-ravaliya.dev/favicon.ico",
        width: 500,
        height: 500,
        alt: "Tushar Ravaliya - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Ravaliya | Full-Stack Developer",
    description:
      "Full-stack MERN developer and national hackathon finalist specializing in fast, scalable, and visually engaging web applications.",
    images: ["https://tushar-ravaliya.dev/favicon.ico"],
    creator: "@tushar_ravaliya",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tushar-ravaliya.dev/#person",
      "name": "Tushar Ravaliya",
      "url": "https://tushar-ravaliya.dev",
      "image": "https://tushar-ravaliya.dev/images/hero-illustration.png",
      "jobTitle": "Full-Stack Developer",
      "description":
        "Full-stack MERN developer and national hackathon finalist specializing in fast, scalable, and visually engaging web applications.",
      "email": "mailto:tushar.ravaliya18@gmail.com",
      "sameAs": [
        "https://github.com/tushar-ravaliya",
        "https://linkedin.com/in/tushar-ravaliya",
        "https://twitter.com/tushar_ravaliya",
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "RK University",
        "url": "https://rku.ac.in",
      },
      "knowsAbout": [
        "Full-Stack Web Development",
        "MERN Stack",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "WebSockets",
        "REST APIs",
      ],
      "knowsLanguage": ["en", "gu", "hi"],
    },
    {
      "@type": "WebSite",
      "@id": "https://tushar-ravaliya.dev/#website",
      "url": "https://tushar-ravaliya.dev",
      "name": "Tushar Ravaliya Portfolio",
      "description":
        "Full-stack MERN developer portfolio and interactive project showcase.",
      "publisher": {
        "@id": "https://tushar-ravaliya.dev/#person",
      },
      "inLanguage": "en",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://tushar-ravaliya.dev/#webpage",
      "url": "https://tushar-ravaliya.dev",
      "name": "Tushar Ravaliya | Full-Stack Developer",
      "isPartOf": {
        "@id": "https://tushar-ravaliya.dev/#website",
      },
      "about": {
        "@id": "https://tushar-ravaliya.dev/#person",
      },
      "mainEntity": {
        "@id": "https://tushar-ravaliya.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="text/markdown" href="/index.md" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
