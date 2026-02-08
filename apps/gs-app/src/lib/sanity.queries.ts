import { groq } from 'next-sanity';

// Get all articles, sorted by publishedAt date
export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->name,
    "categories": categories[]->title
  }
`;

// Get a single article by slug
export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    body,
    "author": author->{
      name,
      image,
      bio
    },
    "categories": categories[]->title
  }
`;

// Get recent articles (limit 3)
export const recentArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage
  }
`;

// Types
export interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  author?: string;
  categories?: string[];
}

export interface ArticleDetail {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  categories?: string[];
  body?: any[];
  author?: {
    name: string;
    image?: any;
    bio?: string;
  };
}
// Get a single service by category (for section display)
export const serviceByCategoryQuery = groq`
  *[_type == "service" && category == $category][0] {
    _id,
    title,
    "slug": slug.current,
    "category": category,
    mainImage,
    shortDescription,
    description
  }
`;

export interface Service {
  _id: string;
  title: string;
  slug: string;
  category: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  shortDescription?: string;
  description?: any[];
}

// Get all team members sorted by level (hierarchy)
export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(level asc) {
    _id,
    name,
    position,
    photo,
    division,
    level,
    bio
  }
`;

export interface TeamMemberSource {
  _id: string;
  name: string;
  position: string;
  photo?: {
    asset: { _ref: string };
    alt?: string;
  };
  division?: string;
  level?: number;
  bio?: string;
}
