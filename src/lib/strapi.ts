const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function getStrapiURL(path?: string) {
  if (!path) return STRAPI_URL;
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}

export async function fetchAPI<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${STRAPI_URL}/api${path}`;
  
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch API: ${res.statusText}`);
  }

  return res.json();
}