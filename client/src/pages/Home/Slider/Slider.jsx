import "./slider.scss";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? 2 : (currentSlide) => currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === 2 ? 0 : (currentSlide) => currentSlide + 1
    );
  };

  const data = [
    "https://cdn1.epicgames.com/ue/product/Screenshot/02-1920x1080-c133fabefb591029cab0e09d68a375f4.jpg?resize=1&w=1920",
    "https://cdn1.epicgames.com/ue/product/Screenshot/MarketplaceGallery01-1920x1080-5a89e7dcd427d31ee242c2f165733ae7.jpg?resize=1&w=1920",
    "https://www.elleman.vn/wp-content/uploads/2020/03/05/1_phong-cach-tech-wear_elleman_0320.jpg",
  ];

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={previousSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
}
