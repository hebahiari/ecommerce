import { useState } from "react";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";
import "./product.scss";
import useFetch from "../../utilis/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  console.log({ data });

  return (
    <div className="product">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="left">
            <div className="images">
              {data?.attributes?.images?.data?.map((image, index) => (
                <img
                  src={process.env.REACT_APP_BASE_URL + image?.attributes?.url}
                  alt=""
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="mainImage">
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  data?.attributes?.images?.data[selectedImage]?.attributes?.url
                }
                alt=""
                className="mainImage"
              />
              {/* <img src={images[selectedImage]} alt="" /> */}
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
          </div>{" "}
        </>
      )}
    </div>
  );
}
