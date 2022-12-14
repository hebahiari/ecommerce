import "./slider.scss";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? 2 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 2 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    setInterval(() => nextSlide(), 4000); // this will make it click again every 1000 miliseconds
  }, []);

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
        <div className="icon" id="clickButton" onClick={previousSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
}
