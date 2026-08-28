import { groq } from "next-sanity";

// Get all homepage sections ordered by display order
export const homepageSectionsQuery = groq`
  *[_type == "homepageSection"] | order(order asc) {
    _id,
    title,
    content,
    alignment,
    order,
    ctaLink,
    ctaText,
  }
`;

// Get 5 highlighted projects for the homepage
export const selectedWorkQuery = groq`
*[_type == "projectPost"] | order(
  coalesce(customOrder, 9999) asc,
  publishedAt desc
)[0..4] {
    _id,
    title,
    slug,
    description,
    "technologies": coalesce(technologies, []),
    publishedAt,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      },
      alt
    }
  }
`;

// Get a single homepage section by ID
export const homepageSectionByIdQuery = groq`
  *[_type == "homepageSection" && _id == $id][0] {
    _id,
    title,
    content,
    alignment,
    order,
    ctaLink,
    ctaText,
  }
`;

// Get Blog Posts
export const blogPostsQuery = groq`
*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  tags,
  category,
  "readTime": round(length(pt::text(content)) / 5 / 200)
}
`;

// Get single blogpost
export const blogPostQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  content,
  publishedAt,
  tags,
  category,
  featuredImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    alt,
  },
  "readTime": round(length(pt::text(content)) / 5 / 200),
}
`;

export const featuredProjectQuery = groq`
*[_type == "projectPost" && featured == true] | order(coalesce(customOrder, 9999) asc)[0] {
  _id,
  title,
  slug,
  description,
  "technologies": coalesce(technologies, []),
  liveUrl,
  githubUrl,
  publishedAt,
  featured,
  featuredImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    alt
  }
}
`;

export const projectsQuery = groq`
*[_type == "projectPost" && (!$excludeFeatured || featured != true)] | order(
  coalesce(customOrder, 9999) asc,
  publishedAt desc
) {
  _id,
  title,
  slug,
  description,
  "technologies": coalesce(technologies, []),
  liveUrl,
  githubUrl,
  publishedAt,
  customOrder,
  featured,
  featuredImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    alt
  }
}
`;

export const projectPostQuery = groq`
*[_type == "projectPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  content,
   "technologies": coalesce(technologies, []),
  liveUrl,
  githubUrl,
  publishedAt,
  featuredImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    alt
  }
}
`;

export const relatedProjectsQuery = groq`
*[_type == "projectPost" && slug.current != $slug] {
  _id,
  title,
  slug,
  publishedAt
}
`;
