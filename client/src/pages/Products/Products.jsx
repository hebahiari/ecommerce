import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "./List/List";
import "./products.scss";

export default function Products() {
  const categoryId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          <div className="inputItem">
            <input type="checkbox" className="" id="1" value={1} />
            <label htmlFor="1">Outerwear</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" className="" id="2" value={2} />
            <label htmlFor="2">Tops</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" className="" id="3" value={3} />
            <label htmlFor="3">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputIte">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={500}
              onChange={(event) => {
                setMaxPrice(event.target.value);
              }}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => {
                setSort("asc");
                console.log("changed");
              }}
            />
            <label htmlFor="asc">Price (Lowest first) </label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://cdn.shopify.com/s/files/1/0271/9658/8125/files/techwear-jacket_2af98b02-dc09-40e8-a29b-22300589c443.jpg?v=1617202769"
          className="categoriesImage"
          alt=""
        />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}
