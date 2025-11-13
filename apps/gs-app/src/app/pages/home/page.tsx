import AboutSection from "./sections/aboutSection";
import BrandSection from "./sections/brandSection";
import Hero from "./sections/hero";

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
      <BrandSection />
    </>
  );
}
