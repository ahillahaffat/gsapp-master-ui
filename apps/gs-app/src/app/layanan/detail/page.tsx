import { redirect } from 'next/navigation';
import { getDetailData } from './lib/getDetailData';
import HeroDetailSection from './sections/heroDetail';
import ProjectsSectionWrapper from './sections/projectsSection';
import DisciplinesSectionWrapper from './sections/disciplinesSection';
import SoftwareCollaborationsSection from './sections/softwareCollaborations';
import ScrollToTop from './ScrollToTop';

type SearchParams = Promise<{ type?: string; idx?: string }>;

export default async function LayananDetailPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const type = params.type as 'geomatika' | 'geometry' | undefined;
  const idx = params.idx;

  const data = await getDetailData({
    type: type ?? 'geomatika',
    idx: idx !== undefined ? (typeof idx === 'string' ? parseInt(idx, 10) : idx) : undefined,
  });

  if (!data) {
    redirect('/layanan');
  }

  return (
    <>
      <ScrollToTop />
      <HeroDetailSection data={data.hero} />
      <ProjectsSectionWrapper data={data.projects} />
      <DisciplinesSectionWrapper data={data.disciplines} />
      <SoftwareCollaborationsSection data={data.software} />
    </>
  );
}
