// app/about/page.tsx

import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavigationAndLogo from "../components/NavigationAndLogo";

export default function AboutPage() {
  return (
    <main className="bg-[#F5F5F5]">
      <NavigationAndLogo currentPage="/about" />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <div className="mb-14">
        <AboutCTA />
      </div>
      <Footer />
    </main>
  );
}
