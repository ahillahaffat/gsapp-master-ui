import { client, urlFor } from '../lib/sanity.client';
import {
  companyInfoQuery,
  CompanyInfo,
  allServicesQuery,
  Service,
  recentProjectsQuery,
  Project,
  allPartnersQuery,
  Partner,
} from '../lib/sanity.queries';

import AboutSection from './components/home/about-section';
import BrandSection from './components/home/brand-section';
import Hero from './components/home/hero-beranda';
import SolutionSection from './components/home/solution-section';
import RecentProjectSection from './components/home/recent-project';

export const revalidate = 60;

export default async function Home() {
  const [companyInfo, services, projects, partners] = await Promise.all([
    client.fetch<CompanyInfo | null>(companyInfoQuery),
    client.fetch<Service[]>(allServicesQuery),
    client.fetch<Project[]>(recentProjectsQuery),
    client.fetch<Partner[]>(allPartnersQuery),
  ]);

  // Map partners to brand format expected by BrandSection
  const partnerBrands = partners?.map((p) => ({
    image: p.logo ? urlFor(p.logo).width(200).url() : '/images/placeholder.png',
    name: p.name,
  })) || [];

  return (
    <>
      <Hero
        backgroundImage="/images/hero.jpg"
        subtitle="Bergabung Bersama Kami"
        title={companyInfo?.name || 'Geometrika Studio'}
        tagline={companyInfo?.tagline || 'Membangun Negeri'}
        overlayOpacity={0.1}
        align="left"
      />
      <AboutSection companyName={companyInfo?.name} />
      <SolutionSection services={services || []} />
      <RecentProjectSection projects={projects || []} />
      <BrandSection partnersList={partnerBrands} />
    </>
  );
}