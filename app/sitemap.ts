import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://tushar-ravaliya.dev",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://tushar-ravaliya.dev/llms.txt",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://tushar-ravaliya.dev/llms-full.txt",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://tushar-ravaliya.dev/agent-instructions.md",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://tushar-ravaliya.dev/index.md",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
