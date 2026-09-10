import { groq } from "next-sanity";

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
  excerpt,
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
  seo {
    title,
    description,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    },
    noIndex
  }
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
  },
  seo {
    title,
    description,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    },
    noIndex
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
