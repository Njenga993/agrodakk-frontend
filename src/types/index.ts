export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  featured: boolean;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  images: StrapiImage[];
  price: number | null;
  featured: boolean;
  inStock: boolean;
  product_category: ProductCategory | null;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  subtitle: string | null;
  description: string | null;
  images: StrapiImage[];
  featured: boolean;
  order: number;
}


export interface BlogArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  images: StrapiImage[];
  coverImage: StrapiImage | null;
  author: string | null;
  publishedDate: string | null;
  category: string | null;
  featured: boolean;
}

export interface SiteSettings {
  id: number;
  documentId: string;
  siteName: string;
  logo: StrapiImage | null;
  contactEmail: string | null;
  contactPhone: string | null;
  address: string | null;
}

// Strapi response wrappers
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}