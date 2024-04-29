import React, { useState } from "react";
import "./navbar.scss";
import { KeyboardArrowDown, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import 'url-change-event'

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const handleClick = () => {
    setMenuClicked(!menuClicked);
  };

  const dropDownMenuItems = (
    <>
      <div className="menu">
        <span className="item" onClick={() => setMenuClicked(false)}>
          <Link to="/" className="menulink">
            Home
          </Link>
        </span>
        <hr />
        <span className="item" onClick={() => setMenuClicked(false)}>
          <Link className="menulink" to="/products/clothing">
            Clothing
          </Link>
        </span>
        <span className="item" onClick={() => setMenuClicked(false)}>
          <Link className="menulink" to="/products/shoes">
            Shoes
          </Link>
        </span>
        <span className="item" onClick={() => setMenuClicked(false)}>
          <Link className="menulink" to="/products/accessories">
            Accessories
          </Link>
        </span>
      </div>
      <div className="overlay"></div>
    </>
  );

  // close cart when url changes
  useEffect(() => {
    window.addEventListener("urlchangeevent", (e) => {
      setOpenCart(false)
    });
  }, [])

  const numberOfItems = products.reduce(
    (currentTotal, currentValue) => currentTotal + currentValue.quantity,
    0
  );

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "white"
      }}
    >
      <div className="wrapper">
        <div className="center">
          <Link className="link" to="/">
            TechWearCo
          </Link>
          <div className="dropdown" onClick={handleClick}>
            TechWearCo
            <KeyboardArrowDown className="arrow" />
          </div>
          {menuClicked ? dropDownMenuItems : null}
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
