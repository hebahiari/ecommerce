import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus, turpis et dictum bibendum, magna magna accumsan eros,
            hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi.
            Vestibulum et consequat sem. Nullam varius tempor sapien vel
            vestibulum.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus, turpis et dictum bibendum, magna magna accumsan eros,
            hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi.
            Vestibulum et consequat sem. Nullam varius tempor sapien vel
            vestibulum.
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
