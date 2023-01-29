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
    console.log(data.length);
    setCurrentSlide(
      currentSlide <= data.length - 5 ? currentSlide + 1 : currentSlide
    );
    console.log({ currentSlide });
  };

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tempus, turpis et dictum bibendum, magna magna accumsan eros,
          hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi.
          Vestibulum et consequat sem. Nullam varius tempor sapien vel
          vestibulum.
        </p>
      </div>
      <div className="bottom">
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
