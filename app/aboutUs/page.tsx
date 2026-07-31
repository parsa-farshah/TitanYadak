import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";
import Footer from "../components/Footer";
import NavigationAndLogo from "../components/NavigationAndLogo";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <NavigationAndLogo currentPage="/aboutUs" />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <div className="mb-20">
        <AboutCTA />
      </div>
      <Footer />
    </main>
  );
}
