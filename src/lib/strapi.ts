const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export function getStrapiURL(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http')) {
    // Convert remote Strapi URL to local /uploads/ path
    const filename = path.split('/').pop();
    return '/uploads/' + filename;
  }
  if (path.startsWith('/uploads/')) {
    return path;
  }
  return '/uploads/' + path;
}

export async function fetchAPI<T>(path: string, options?: RequestInit): Promise<T> {
  // This is no longer used - data comes from local JSON now
  throw new Error('fetchAPI is deprecated - data is now local');
}
