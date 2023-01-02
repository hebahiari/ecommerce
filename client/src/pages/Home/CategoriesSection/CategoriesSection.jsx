import { Link } from "react-router-dom";
import "./categoriesSection.scss";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/home-tops.jpg" alt="" />
          <button>
            <Link to="./products/1" className="link">
              Tops
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/home-shoes.jpg" alt="" />
          <button>
            <Link to="./products/shoes" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/home-outerwear.jpg" alt="" />
          <button>
            <Link to="./products/clothing?subcategory=11" className="link">
              Outerwear
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/home-pants.jpg" alt="" />
              <button>
                <Link to="./products/clothing?subcategory=10" className="link">
                  Pants
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/home-accessories.jpg" alt="" />
              <button>
                <Link to="./products/accessories" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/home-sets.jpg" alt="" />
          <button>
            <Link to="./products/clothing?subcategory=12" className="link">
              Sets
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
