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
    const projectSectionQuery = `*[_type == "homeRecentProjectSection"][0]`;
    const clientQuery = `*[_type == "homeClientSection"][0]`;
    const partnerQuery = `*[_type == "homePartnerSection"][0]`;
    const layananGeomatikaQuery = `*[_type == "layananGeomatikaSection"][0]`;
    const layananGeometryQuery = `*[_type == "layananGeometrySection"][0]`;

    const [heroRes, aboutRes, solutionRes, projectSectionRes, clientRes, partnerRes, geomatikaRes, geometryRes] = await Promise.all([
      client.fetch(heroQuery),
      client.fetch(aboutQuery),
      client.fetch(solutionQuery),
      client.fetch(projectSectionQuery),
      client.fetch(clientQuery),
      client.fetch(partnerQuery),
      client.fetch(layananGeomatikaQuery),
      client.fetch(layananGeometryQuery),
    ]);

    // Combine Layanan pages into dynamic projects array
    const dynamicProjects = [];
    if (geomatikaRes && Object.keys(geomatikaRes).length > 0) {
      dynamicProjects.push({
        id: geomatikaRes._id || "geomatika",
        title: geomatikaRes.title || 'Geomatika',
        description: geomatikaRes.description || '',
        image: geomatikaRes.image ? urlFor(geomatikaRes.image).url() : '/images/geo1.jpg',
      });
    }
    if (geometryRes && Object.keys(geometryRes).length > 0) {
      dynamicProjects.push({
        id: geometryRes._id || "geometry",
        title: geometryRes.title || 'Geometry',
        description: geometryRes.description || '',
        image: geometryRes.image ? urlFor(geometryRes.image).url() : '/images/geo2.jpg',
      });
    }

    // Map Solutions
    const solutionsData = solutionRes ? {
      title: "Layanan Kami",
      solutions: solutionRes.solutions ? solutionRes.solutions.map((s: any, i: number) => ({
        key: s.title ? s.title.split(' ')[0] : String(i),
        title: s.title || '',
        description: s.description || '',
        image: s.image ? urlFor(s.image).url() : '/images/geo1.jpg',
      })) : []
    } : undefined;

    // Map Brands (Clients & Partners separated)
    const brandData = (clientRes || partnerRes) ? {
      clientsTitle: "Our Clients",
      clientsDescription: clientRes?.description || '',
      clientsList: clientRes?.brands ? clientRes.brands.map((b: any) => ({
        name: b.name || '',
        image: b.logo ? urlFor(b.logo).url() : '/images/1.png',
      })) : [],
      partnersTitle: "Our Partners", // Hardcoded
      partnersDescription: partnerRes?.description || "",
      partnersList: partnerRes?.partners ? partnerRes.partners.map((p: any) => ({
        name: p.name || '',
        image: p.logo ? urlFor(p.logo).url() : '/images/7.png',
      })) : []
    } : undefined;

    const mappedAboutRes = aboutRes ? {
      ...aboutRes,
      image: aboutRes.image ? urlFor(aboutRes.image).url() : undefined
    } : null;

    return {
      hero: heroRes,
      about: mappedAboutRes,
      solution: solutionsData,
      recentProjectSection: projectSectionRes,
      projects: dynamicProjects,
      brand: brandData,
    };
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    return { hero: null, about: null, solution: undefined, recentProjectSection: null, projects: null, brand: undefined };
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
        title="Recent Project"
        showcaseText={data.recentProjectSection?.showcaseText}
        projects={data.projects && data.projects.length > 0 ? data.projects : undefined}
      />
      <BrandSection
        data={data.brand?.clientsList?.length > 0 ? data.brand : undefined}
      />
    </>
  );
}