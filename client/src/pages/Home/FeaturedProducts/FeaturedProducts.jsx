import Card from "../../../Components/Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../../utilis/useFetch";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch("/products?populate=*");

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tempus, turpis et dictum bibendum, magna magna accumsan eros,
          hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi.
          Vestibulum et consequat sem. Nullam varius tempor sapien vel
          vestibulum.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "there's an error"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}
