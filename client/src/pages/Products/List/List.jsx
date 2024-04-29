import Card from "../../../Components/Card/Card";
import Loading from "../../../Components/Loading/Loading";
import useFetch from "../../../utilis/useFetch";
import "./list.scss";

export default function List({ category, maxPrice, sort, selectedCategories }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][title]=${category}${selectedCategories
      .map((title) => `&[filters][subcategories][title]=${title}`)
      .join("")}&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ""
    }`
  );

  return (
    <div className="list">
      {loading ? (
        <Loading />
      ) : data.length ? (
        data?.map((item) => <Card item={item} key={item.id} />)
      ) : (
        <span className="notFound">No items found</span>
      )}
    </div>
  );
}
