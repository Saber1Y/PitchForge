import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = `*[
  _type == "startup" &&
  (
    !defined($search) ||
    companyName match $search ||
    tagline match $search ||
    category == $search ||
    author->name match $search
  )
] | order(_createdAt desc) {
  _id,
  slug,
  companyName,
  tagline,
  description,
  stage,
  fundingGoal,
  fundingRaised,
  teamSize,
  votes,
  location,
  founded,
  logo,
  images,
  founders,
  tags,
  isBookmarked,
  createdAt,
  views,
  category,
  image,
  pitch
}
`;

export const STARTUP_BY_SLUG_QUERY = `*[
  _type == "startup" &&
  slug.current == $slug
][0] {
  _id,
  slug,
  companyName,
  tagline,
  description,
  stage,
  fundingGoal,
  fundingRaised,
  teamSize,
  votes,
  location,
  founded,
  logo,
  images,
  founders,
  tags,
  isBookmarked,
  createdAt,
  views,
  category,
  image,
  pitch
}
`;

export const STARTUP_BY_VIEWS_QUERY = `
  *[_type == "startup" && slug.current == $slug][0] {
    views
  }
`;
