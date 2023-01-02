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

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src="/img/home-1.jpg" alt="" />
        <img src="/img/home-2.jpg" alt="" />
        <img src="/img/home-3.jpg" alt="" />
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
