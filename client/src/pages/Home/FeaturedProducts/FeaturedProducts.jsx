import Card from "../../../Components/Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../../utilis/useFetch";
import Loading from "../../../Components/Loading/Loading";
import { useState } from "react";
import { EastOutlined, WestOutlined } from "@mui/icons-material";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch("/products?populate=*");
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide <= data.length - 5 ? currentSlide + 1 : currentSlide
    );
  };

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Explore our handpicked selection of top trends and timeless classics in our Featured Items section. From stylish tops to chic accessories, find everything you need to elevate your wardrobe effortlessly.
        </p>old
      </div>
      <div className="bottom">
        <div className="gradient"></div>
        <div className="icon left" onClick={previousSlide}>
          <WestOutlined />
        </div>
        <div
          className="content"
          style={{ transform: `translateX(-${currentSlide * 450}px)` }}
        >
          {error ? (
            "there's an error"
          ) : loading ? (
            <Loading />
          ) : (
            data.map((item) => <Card item={item} key={item.id} />)
          )}
        </div>
        <div className="icon right" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
}
