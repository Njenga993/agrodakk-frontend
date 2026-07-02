
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import servicesData from '@/data/services.json';
import blogsData from '@/data/blogs.json';
import siteSettingsData from '@/data/site-settings.json';
import type {
  Product,
  ProductCategory,
  Service,
  BlogArticle,
  SiteSettings,
  StrapiCollectionResponse,
  StrapiResponse,
} from '@/types';

// Helper to simulate async (keeps same API shape)
function respond<T>(data: T): Promise<T> {
  return Promise.resolve(data);
}

export function getProducts() {
  return respond<StrapiCollectionResponse<Product>>(productsData as unknown as StrapiCollectionResponse<Product>);
}

export function getFeaturedProducts() {
  const data = productsData as unknown as StrapiCollectionResponse<Product>;
  const featured = data.data.filter(p => p.featured);
  return respond<StrapiCollectionResponse<Product>>({
    data: featured,
    meta: data.meta,
  });
}

export function getProduct(slug: string) {
  const data = productsData as unknown as StrapiCollectionResponse<Product>;
  const product = data.data.filter(p => p.slug === slug);
  return respond<StrapiCollectionResponse<Product>>({
    data: product,
    meta: { pagination: { page: 1, pageSize: 1, pageCount: 1, total: product.length } },
  });
}

export function getCategories() {
  return respond<StrapiCollectionResponse<ProductCategory>>(categoriesData as unknown as StrapiCollectionResponse<ProductCategory>);
}

export function getServices() {
  return respond<StrapiCollectionResponse<Service>>(servicesData as unknown as StrapiCollectionResponse<Service>);
}

export function getFeaturedServices() {
  const data = servicesData as unknown as StrapiCollectionResponse<Service>;
  const featured = data.data.filter(s => s.featured);
  return respond<StrapiCollectionResponse<Service>>({
    data: featured,
    meta: data.meta,
  });
}

export function getBlogs() {
  return respond<StrapiCollectionResponse<BlogArticle>>(blogsData as unknown as StrapiCollectionResponse<BlogArticle>);
}

export function getFeaturedBlogs() {
  const data = blogsData as unknown as StrapiCollectionResponse<BlogArticle>;
  const featured = data.data.filter(b => b.featured).slice(0, 2);
  return respond<StrapiCollectionResponse<BlogArticle>>({
    data: featured,
    meta: data.meta,
  });
}

export function getBlog(slug: string) {
  const data = blogsData as unknown as StrapiCollectionResponse<BlogArticle>;
  const blog = data.data.filter(b => b.slug === slug);
  return respond<StrapiCollectionResponse<BlogArticle>>({
    data: blog,
    meta: { pagination: { page: 1, pageSize: 1, pageCount: 1, total: blog.length } },
  });
}

export function getPage(slug: string) {
  return respond<StrapiCollectionResponse<any>>({ data: [], meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } } });
}

export function getSiteSettings() {
  return respond<StrapiResponse<SiteSettings>>(siteSettingsData as unknown as StrapiResponse<SiteSettings>);
}
