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
