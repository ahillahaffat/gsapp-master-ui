import { groq } from 'next-sanity';

export interface SanityImage {
  asset: { _ref: string };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
}
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
  mainImage?: SanityImage;
  author?: string;
  categories?: string[];
}

export interface ArticleDetail {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  categories?: string[];
  body?: any[];
  author?: {
    name: string;
    image?: SanityImage;
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
  mainImage?: SanityImage;
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
  photo?: SanityImage;
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

// ─── Home Page Sections ────────────────────────────────────────────────────────
export interface HomeHeroSection {
  title?: string;
  subtitle?: string;
  tagline?: string;
  backgroundImage?: SanityImage;
}

export interface HomeAboutSection {
  description?: string;
  image?: SanityImage;
}

export interface HomeSolutionSection {
  solutions?: { title?: string; description?: string; image?: SanityImage }[];
}

export interface HomeRecentProjectSection {
  title?: string;
  showcaseText?: string;
  showcaseImage?: SanityImage;
  projects?: Array<{
    title?: string;
    description?: string;
    image?: SanityImage;
  }>;
}

export interface HomeClientSection {
  description?: string;
  brands?: { name?: string; logo?: SanityImage }[];
}

export interface HomePartnerSection {
  description?: string;
  partners?: { name?: string; logo?: SanityImage }[];
}

export interface LayananSection {
  _id: string;
  title?: string;
  description?: string;
  image?: SanityImage;
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
  logo: SanityImage;
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
  mainImage?: SanityImage;
  description?: any[];
}

export interface ProjectDetail extends Project {
  gallery?: (SanityImage & { caption?: string })[];
}

export const layananGeomatikaDetailQuery = groq`
  *[_type == "layananGeomatikaSection"][0] {
    title,
    description,
    image,
    detailProjects {
      title,
      projects[] {
        title,
        description,
        image
      }
    },
    detailDisciplines {
      title,
      leftColumn[] {
        title,
        items
      },
      rightColumn[] {
        title,
        items
      }
    },
    detailCollaborations {
      title,
      collaborations[] {
        name,
        logo
      }
    }
  }
`;

export const layananGeometryDetailQuery = groq`
  *[_type == "layananGeometrySection"][0] {
    features[] {
      title,
      description,
      image,
      detailProjects {
        title,
        projects[] {
          title,
          description,
          image
        }
      },
      detailDisciplines {
        title,
        leftColumn[] {
          title,
          items
        },
        rightColumn[] {
          title,
          items
        }
      },
      detailCollaborations {
        title,
        collaborations[] {
          name,
          logo
        }
      }
    }
  }
`;

export interface GeomatikaDetailSource {
  title?: string;
  description?: string;
  image?: SanityImage;
  detailProjects?: {
    title?: string;
    projects?: Array<{ title?: string; description?: string; image?: SanityImage }>;
  };
  detailDisciplines?: {
    title?: string;
    leftColumn?: Array<{ title?: string; items?: string[] }>;
    rightColumn?: Array<{ title?: string; items?: string[] }>;
  };
  detailCollaborations?: {
    title?: string;
    collaborations?: Array<{ name?: string; logo?: SanityImage }>;
  };
}

export interface GeometryFeatureSource {
  title?: string;
  description?: string;
  image?: SanityImage;
  detailProjects?: {
    title?: string;
    projects?: Array<{ title?: string; description?: string; image?: SanityImage }>;
  };
  detailDisciplines?: {
    title?: string;
    leftColumn?: Array<{ title?: string; items?: string[] }>;
    rightColumn?: Array<{ title?: string; items?: string[] }>;
  };
  detailCollaborations?: {
    title?: string;
    collaborations?: Array<{ name?: string; logo?: SanityImage }>;
  };
}

export interface GeometryDetailSource {
  features?: GeometryFeatureSource[];
}
