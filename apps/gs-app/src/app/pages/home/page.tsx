import AboutSection from "../../components/home/about-section";
import BrandSection from "./sections/brandSection";
import Hero from "./sections/hero";
import RecentProjectSection from "./sections/recentProjectSection";

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
      <RecentProjectSection />
      <BrandSection />
    </>
  );
}
