import React from "react";
import "./navbar.scss";
import {
  Search,
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  KeyboardArrowDown,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
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
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
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
            <div className="cartIcon">
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
