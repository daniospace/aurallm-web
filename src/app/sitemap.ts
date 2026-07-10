import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aurallm.com";
  const routes = ["", "/compare", "/features", "/pricing", "/security", "/customers", "/changelog", "/blog"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/changelog" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
