import AboutSection from "../../components/home/about-section";
import BrandSection from "../../components/home/brand-section";
import Hero from "../../components/home/hero-beranda";
import SolutionSection from "../../components/home/solution-section";
import RecentProjectSection from "../../components/home/recent-project";

export default function Home() {
  return (
    <>
      <Hero
      backgroundImage="/images/hero.jpg"
      subtitle="Bergabung Bersama Kami"
      title="Geometrika Studio"
      tagline="Membangun Negeri"
      overlayOpacity={0.1}
      align="left"
      />
      <AboutSection />
      <SolutionSection />
      <RecentProjectSection />
      <BrandSection />
    </>
  );
}
