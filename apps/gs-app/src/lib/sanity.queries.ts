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

// ─── Company Profile Queries (Singletons) ─────────────────────────────────────

export const companyInfoQuery = groq`
  *[_type == "companyInfo"][0] {
    name,
    tagline
  }
`;

export interface CompanyInfo {
  name: string;
  tagline?: string;
}

export const companyVisionQuery = groq`
  *[_type == "companyVision"][0] {
    vision
  }
`;

export interface CompanyVision {
  vision: string;
}

export const companyMissionQuery = groq`
  *[_type == "companyMission"][0] {
    mission[] {
      keyword,
      description
    }
  }
`;

export interface CompanyMission {
  mission: { keyword: string; description: string }[];
}

export const companyValuesQuery = groq`
  *[_type == "companyValues"][0] {
    values[] {
      title,
      description
    }
  }
`;

export interface CompanyValues {
  values: { title: string; description: string }[];
}

export const companyContactQuery = groq`
  *[_type == "companyContact"][0] {
    address,
    email,
    phone,
    mapsEmbedUrl
  }
`;

export interface CompanyContact {
  address?: string;
  email?: string;
  phone?: string;
  mapsEmbedUrl?: string;
}

// ─── Partners / Clients Query ──────────────────────────────────────────────────

export const allPartnersQuery = groq`
  *[_type == "partner"] | order(_createdAt asc) {
    _id,
    name,
    logo,
    website,
    description
  }
`;

export interface Partner {
  _id: string;
  name: string;
  logo: {
    asset: { _ref: string };
  };
  website?: string;
  description?: string;
}

// ─── All Services Query ────────────────────────────────────────────────────────

export const allServicesQuery = groq`
  *[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    mainImage,
    shortDescription,
    description
  }
`;

export const servicesByCategoryQuery = groq`
  *[_type == "service" && category == $category] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    mainImage,
    shortDescription,
    description
  }
`;

// ─── Projects Query ────────────────────────────────────────────────────────────

export const allProjectsQuery = groq`
  *[_type == "project"] | order(completionDate desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    client,
    completionDate,
    mainImage,
    description
  }
`;

export const recentProjectsQuery = groq`
  *[_type == "project"] | order(completionDate desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    category,
    client,
    completionDate,
    mainImage,
    description
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    client,
    completionDate,
    mainImage,
    gallery[] {
      asset,
      caption
    },
    description
  }
`;

export interface Project {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  client?: string;
  completionDate?: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  description?: any[];
}

export interface ProjectDetail extends Project {
  gallery?: {
    asset: { _ref: string };
    caption?: string;
  }[];
}
