
import OurService from "./components/OurService";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import AccordionAndImg from "./components/AccordionAndImg";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <OurProducts />
      <AboutUs />
      <OurService />
      <AccordionAndImg />
      <Footer />
    </div>
  );
}
