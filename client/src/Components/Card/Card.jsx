import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.isNew && <span>New</span>}
          <img
            src={
              process.env.REACT_APP_BASE_URL +
              item?.attributes?.images?.data[0]?.attributes?.url
            }
            alt=""
            className="mainImage"
          />
          <img
            src={
              process.env.REACT_APP_BASE_URL +
              item?.attributes?.images?.data[1]?.attributes?.url
            }
            alt=""
            className="secondImage"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          {item?.attributes.oldPrice && <h3 className="crossed">${item?.attributes.oldPrice}</h3>}
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}
