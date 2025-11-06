import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "http://localhost:3000";
  const pages = ["/", "/projects", "/experience", "/skills", "/contact"];
  return pages.map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
