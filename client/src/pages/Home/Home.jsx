import CategoriesSection from "./CategoriesSection/CategoriesSection";
import Contact from "./Contact/Contact";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import "./home.scss";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type={"featured"} />
      <CategoriesSection />
      <Contact />
    </div>
  );
}
