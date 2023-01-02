import React, { useState } from "react";
import "./navbar.scss";
import {
  Search,
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  KeyboardArrowDown,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const products = useSelector((state) => state.cart.products);

  //change navbar color when scrolled
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    }
  };

  window.addEventListener("scroll", changeColor);

  const numberOfItems = products.reduce(
    (currentTotal, currentValue) => currentTotal + currentValue.quantity,
    0
  );

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: `${color ? "white" : "transparent"}`,
        color: `${color ? "black" : "white"}`,
      }}
    >
      <div className="wrapper">
        {" "}
        <div className="center">
          <Link className="link" to="/">
            TechWearCo
          </Link>
        </div>
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/clothing">
              Clothing
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/shoes">
              Shoes
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/accessories">
              Accessories
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <div className="item">
              <img src="/img/eng.png" alt="" className="lang" />
              <KeyboardArrowDown />
            </div>
            <div
              className="cartIcon"
              onClick={() => setOpenCart((current) => !current)}
            >
              <ShoppingCartOutlined />
              <span>{numberOfItems}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
}
