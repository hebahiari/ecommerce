import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="/products/clothing" className="link">Clothing</Link>
          <Link to="/products/accessories" className="link">Accessories</Link>
          <Link to="/products/shoes" className="link">Shoes</Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Discover urban style redefined at TechWearCo. Explore our techwear collection, blending fashion and function seamlessly. Elevate your wardrobe with sleek, innovative pieces designed to conquer the city in style.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Got questions or feedback? Reach out to us at contact@techwearco.com. Our friendly team is here to assist you with anything you need. Connect with us today and let's make your shopping experience exceptional.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">TechWearCo</span>
          <span className="copyrights">
            © 2022 TechWearCo. All rights reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payments.png" alt="" />
        </div>
      </div>
    </div>
  );
}
