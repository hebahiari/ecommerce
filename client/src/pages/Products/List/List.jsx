import Card from "../../../Components/Card/Card";
import useFetch from "../../../utilis/useFetch";
import "./list.scss";

export default function List({
  categoryId,
  maxPrice,
  sort,
  selectedCategories,
}) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}
