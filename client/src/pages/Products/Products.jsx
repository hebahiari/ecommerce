import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useFetch from "../../utilis/useFetch";
import List from "./List/List";
import "./products.scss";

export default function Products() {
  const category = useParams().category;
  const largeWindow = window.innerWidth > 750
  const subcategoryId = new URLSearchParams(useLocation().search).get(
    "subcategory"
  );
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(
    subcategoryId ? [subcategoryId] : []
  );
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(largeWindow);
  const [openPriceMenu, setopenPriceMenu] = useState(false);

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
  }

  return (
    <>
      <img src="/img/products-banner.jpg" className="categoriesImage" alt="" />

      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Categories {openCategoriesMenu ? <KeyboardArrowUp onClick={() => setOpenCategoriesMenu(false)} /> : <KeyboardArrowDown onClick={() => setOpenCategoriesMenu(true)} />}</h2>
            {openCategoriesMenu ? data?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  className=""
                  id={item.attributes.title}
                  value={item.attributes.title}
                  onChange={handleChange}
                  checked={selectedCategories.find((value) => value == item.attributes.title)}
                />
                <label htmlFor={item.attributes.title}>{item.attributes.title}</label>
              </div>
            )) : null}
          </div>
          <div className="filterItem">
            <h2>Filter By Price {openPriceMenu ? <KeyboardArrowUp onClick={() => setopenPriceMenu(false)} /> : <KeyboardArrowDown onClick={() => setopenPriceMenu(true)} />}</h2>
            {openPriceMenu ? <div className="inputIte">
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
            </div> : null}
          </div>
          <div className="filterItem">
            <h2>Sort By {openSortMenu ? <KeyboardArrowUp onClick={() => setOpenSortMenu(false)} /> : <KeyboardArrowDown onClick={() => setOpenSortMenu(true)} />}</h2>
            {openSortMenu ? <><div className="inputItem">
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
              </div></> : null}
          </div>
        </div>
        <div className="right">
          <List
            category={category}
            maxPrice={maxPrice}
            sort={sort}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </>
  );
}
