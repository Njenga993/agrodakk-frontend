import { fetchAPI } from "./strapi";
import type {
  Product,
  ProductCategory,
  Service,
  BlogArticle,
  SiteSettings,
  StrapiCollectionResponse,
  StrapiResponse,
} from "@/types";

export async function getProducts() {
  return fetchAPI<StrapiCollectionResponse<Product>>(
    "/products?populate[product_category][fields][0]=name&populate[product_category][fields][1]=slug&populate[images][fields][0]=url&populate[images][fields][1]=alternativeText&sort=name:asc&pagination[pageSize]=100"
  );
}

export async function getFeaturedProducts() {
  return fetchAPI<StrapiCollectionResponse<Product>>(
    "/products?filters[featured][$eq]=true&populate[product_category][fields][0]=name&populate[product_category][fields][1]=slug&populate[images][fields][0]=url&populate[images][fields][1]=alternativeText&sort=name:asc"
  );
}

export async function getProduct(slug: string) {
  return fetchAPI<StrapiCollectionResponse<Product>>(
    `/products?filters[slug][$eq]=${slug}&populate[0]=product_category&populate[1]=images`
  );
}

export async function getCategories() {
  return fetchAPI<StrapiCollectionResponse<ProductCategory>>(
    "/product-categories?populate=*&sort=name:asc"
  );
}

export async function getServices() {
  return fetchAPI<StrapiCollectionResponse<Service>>(
    "/services?populate=*&sort=order:asc"
  );
}

export async function getFeaturedServices() {
  return fetchAPI<StrapiCollectionResponse<Service>>(
    "/services?filters[featured][$eq]=true&populate=*&sort=order:asc"
  );
}

export async function getBlogs() {
  return fetchAPI<StrapiCollectionResponse<BlogArticle>>(
    "/blog-articles?populate=*&sort=publishedDate:desc"
  );
}

export async function getFeaturedBlogs() {
  return fetchAPI<StrapiCollectionResponse<BlogArticle>>(
    "/blog-articles?filters[featured][$eq]=true&populate=*&sort=publishedDate:desc&pagination[limit]=2"
  );
}

export async function getBlog(slug: string) {
  return fetchAPI<StrapiCollectionResponse<BlogArticle>>(
    `/blog-articles?filters[slug][$eq]=${slug}&populate=*`
  );
}

export async function getPage(slug: string) {
  return fetchAPI<StrapiCollectionResponse<any>>(
    `/pages?filters[slug][$eq]=${slug}&populate[0]=sections.products&populate[1]=sections.services&populate[2]=sections.projects&populate[3]=sections.backgroundImage`
  );
}

export async function getSiteSettings() {
  return fetchAPI<StrapiResponse<SiteSettings>>(
    "/site-setting?populate=*"
  );
}