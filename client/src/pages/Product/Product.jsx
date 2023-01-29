import { useEffect, useState } from "react";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";
import "./product.scss";
import useFetch from "../../utilis/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Loading from "../../Components/Loading/Loading";

export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false)

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // display added! message for one second after adding an item to cart
useEffect(() => {
  setTimeout(() => setAdded(false), 1000)
}, [added])


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
                  onMouseOver={() => setSelectedImage(index)}
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
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() => {
                  setQuantity((current) => (current === 1 ? 1 : current - 1))
                  setAdded(false)
                }
                }
              >
                -
              </button>
              <div className="span">{quantity}</div>
              <button onClick={() => {
                setQuantity((current) => current + 1)
                setAdded(false)
              }}>
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    image: data.attributes.images.data[0].attributes.url,
                    quantity,
                  })
                )
                setAdded(true)
                }
              }
            >
              {added? "Added!" : <><AddShoppingCart />Add to cart</>}
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
          </div>
        </>
      )}
    </div>
  );
}
