import { useState } from "react";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";
import "./product.scss";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-dress-5.jpg",
    "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-dress-1.jpg",
    "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-dress-4.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImage(1)} />
          <img src={images[2]} alt="" onClick={() => setSelectedImage(2)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Belted Dress</h1>
        <span className="price">$99</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tempus, turpis et dictum bibendum, magna magna accumsan eros,
          hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi.
          Vestibulum et consequat sem. Nullam varius tempor sapien vel
          vestibulum.
        </p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((current) => (current === 1 ? 1 : current - 1))
            }
          >
            -
          </button>
          <div className="span">{quantity}</div>
          <button onClick={() => setQuantity((current) => current + 1)}>
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCart />
          Add to cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorder /> Add to wishlist
          </div>
          <div className="item">
            <Balance /> Add to compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Zara</span>
          <span>Product type: Dress</span>
          <span>Tags: dress, women</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span>Additional Info</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
