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

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/eng.png" alt="" className="lang" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            USD
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Clothing
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Shoes
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            TechWearCo
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Stores
            </Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div
              className="cartIcon"
              onClick={() => setOpenCart((current) => !current)}
            >
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
}
