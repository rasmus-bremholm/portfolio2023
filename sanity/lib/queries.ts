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
  featuredImage,
}
`;
