import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utilis/useFetch";
import List from "./List/List";
import "./products.scss";

export default function Products() {
  const category = useParams().category;
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][title][$eq]=${category}`
  );

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedCategories(
      isChecked
        ? [...selectedCategories, value]
        : selectedCategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                className=""
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
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
        <List
          category={category}
          maxPrice={maxPrice}
          sort={sort}
          selectedCategories={selectedCategories}
        />
      </div>
    </div>
  );
}
