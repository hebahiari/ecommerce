import { Link } from "react-router-dom";
import "./categoriesSection.scss";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/home-tops.jpg" alt="" />

          <Link to="./products/clothing?subcategory=tops" className="link">
            <button>Tops </button>
          </Link>
        </div>
        <div className="row">
          <img src="/img/home-shoes.jpg" alt="" />

          <Link to="./products/shoes" className="link">
            <button>Shoes</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/home-outerwear.jpg" alt="" />

          <Link to="./products/clothing?subcategory=outerwear" className="link">
            <button>Outerwear</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/home-pants.jpg" alt="" />

              <Link to="./products/clothing?subcategory=pants" className="link">
                <button>Pants</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/home-accessories.jpg" alt="" />

              <Link to="./products/accessories" className="link">
                <button>Accessories</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/home-sets.jpg" alt="" />
          <Link to="./products/clothing?subcategory=sets" className="link">
            <button>Sets</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
