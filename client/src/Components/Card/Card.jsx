import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New</span>}
          <img src={item.images[0]} alt="" className="mainImage" />
          <img src={item.images[1]} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
}
