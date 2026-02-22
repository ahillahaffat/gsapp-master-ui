import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.client";
import AboutSection from "./components/home/about-section";
import BrandSection from "./components/home/brand-section";
import Hero from "./components/home/hero-beranda";
import SolutionSection from "./components/home/solution-section";
import RecentProjectSection from "./components/home/recent-project";

export const revalidate = 60; // revalidate this page every 60 seconds

async function getHomePageData() {
  try {
    const heroQuery = `*[_type == "homeHeroSection"][0]`;
    const aboutQuery = `*[_type == "homeAboutSection"][0]`;
    const solutionQuery = `*[_type == "homeSolutionSection"][0]`;
    const projectQuery = `*[_type == "portfolioProject"] | order(date desc)[0...3]`;
    const brandQuery = `*[_type == "homeBrandSection"][0]`;

    const [heroRes, aboutRes, solutionRes, projectsRes, brandRes] = await Promise.all([
      client.fetch(heroQuery),
      client.fetch(aboutQuery),
      client.fetch(solutionQuery),
      client.fetch(projectQuery),
      client.fetch(brandQuery),
    ]);

    // Map projects
    const dynamicProjects = projectsRes ? projectsRes.map((p: any) => ({
      id: p._id,
      title: p.category || "Proyek Berjalan",
      description: p.description || "",
      image: p.image ? urlFor(p.image).url() : '/images/geo1.jpg',
    })) : null;

    // Map Solutions
    const solutionsData = solutionRes ? {
      title: solutionRes.title,
      solutions: solutionRes.solutions ? solutionRes.solutions.map((s: any, i: number) => ({
        key: s.title ? s.title.split(' ')[0] : String(i),
        title: s.title || '',
        description: s.description || '',
        image: s.image ? urlFor(s.image).url() : '/images/geo1.jpg',
      })) : []
    } : undefined;

    // Map Brands
    const brandData = brandRes ? {
      clientsTitle: brandRes.title || 'Our Clients',
      clientsDescription: brandRes.description || '',
      clientsList: brandRes.brands ? brandRes.brands.map((b: any) => ({
        name: b.name || '',
        image: b.logo ? urlFor(b.logo).url() : '/images/1.png',
      })) : [],
      partnersTitle: "Our Partners", // Hardcoded as schema only has one list it seems, wait user might want to edit later, leaving as default for partners
      partnersDescription: "",
      partnersList: []
    } : undefined;

    return {
      hero: heroRes,
      about: aboutRes,
      solution: solutionsData,
      projects: dynamicProjects,
      brand: brandData,
    };
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    return { hero: null, about: null, solution: undefined, projects: null, brand: undefined };
  }
}

export default async function Home() {
  const data = await getHomePageData();

  return (
    <>
      <Hero
        backgroundImage={data.hero?.backgroundImage ? urlFor(data.hero.backgroundImage).url() : "/images/hero.jpg"}
        subtitle={data.hero?.subtitle || "Bergabung Bersama Kami"}
        title={data.hero?.title || "Geometrika Studio"}
        tagline={data.hero?.tagline || "Membangun Negeri"}
        overlayOpacity={0.1}
        align="left"
      />
      <AboutSection
        data={data.about ? { ...data.about } : undefined}
      />
      <SolutionSection
        data={data.solution}
      />
      <RecentProjectSection
        projects={data.projects && data.projects.length > 0 ? data.projects : undefined}
      />
      <BrandSection
        data={data.brand?.clientsList?.length > 0 ? data.brand : undefined}
      />
    </>
  );
}