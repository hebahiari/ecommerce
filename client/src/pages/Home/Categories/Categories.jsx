import { Link } from "react-router-dom";
import "./categories.scss";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.shopify.com/s/files/1/0526/6623/7082/products/Techwear-Tank-Top_1_300x.jpg?v=1668493033"
            alt=""
          />
          <button>
            <Link to="./products/1" className="link">
              Tops
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn.shopify.com/s/files/1/0526/6623/7082/products/TECHWEAR_VULCANIZED_SHOES-goth_600x.jpg?v=1668858039"
            alt=""
          />
          <button>
            <Link to="./products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.shopify.com/s/files/1/0567/5873/0916/products/techwear-trench-coat-_1_400x.png?v=1643220023"
            alt=""
          />
          <button>
            <Link to="./products/1" className="link">
              Outerwear
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.shopify.com/s/files/1/0271/9658/8125/products/womens-black-tactical-pants-446_400x.jpg?v=1637167541"
                alt=""
              />
              <button>
                <Link to="./products/1" className="link">
                  Pants
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.shopify.com/s/files/1/0039/1780/7734/products/futuristic-techwear-shoulder-accessory-streetwear-fashion-raikago-13795477618806_2000x.jpg?v=1579809801"
                alt=""
              />
              <button>
                <Link to="./products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/df/03/d4/df03d4eb177f1023ca4f85f83bcc0a41.jpg"
            alt=""
          />
          <button>
            <Link to="./products/1" className="link">
              Sets
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
