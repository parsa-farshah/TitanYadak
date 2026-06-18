import AboutUs from "./components/AboutUs";
import ContactUs from "./components/OurService";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <OurProducts />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
