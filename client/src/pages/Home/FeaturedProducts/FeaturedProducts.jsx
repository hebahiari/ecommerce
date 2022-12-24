import Card from "../../../Components/Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../../utilis/useFetch";

export default function FeaturedProducts({ type }) {
  // const data = [
  //   {
  //     id: 1,
  //     images: [
  //       "https://gothbb.com/wp-content/uploads/2022/04/Cool-Girl-Locomotive-Short-Top_1-600x600.jpg",
  //       "https://gothbb.com/wp-content/uploads/2022/04/Cool-Girl-Locomotive-Short-Top_3-600x600.jpg",
  //     ],
  //     title: "Mesh Belted Top",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 1,
  //     images: [
  //       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlEG0IWG8Hz1s34-LKs4FgWFIuwDyd-k5nF2qww0gWygubAJ5xFUTWYK2mM9eynrc9J0VN5u46Wy4N5bTrhOlelVFlr1hx&usqp=CAY",
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJFk5k-qUAynYQLRZGWYIKObVBEwnGyrUMu2QPdTg3gAOArJsK09y2ksiaKqb2UN0VEZoVaDAB5N8fbif5XFLMejjHYKoLUQ&usqp=CAY",
  //     ],
  //     title: "Baggy Chain Pants",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 1,
  //     images: [
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyd1M479KdAhqFrIUYgoslGRmXXIlY9wXi9ByqpyDXiJuAk_vT52SaWlbdByW8fiW-ZDg6IlsZ7dG7nuBeZL8GnGcvdQC3rg&usqp=CAY",
  //       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTSSWjvnTxbSk9FhvMtLhFR3NISPoT6o3KxRsP7LkA7SCRXz06gkxTpN1EpXUqPD6wOqIWiOOVBgiLZ543Z4p_xC9U4_0cw&usqp=CAY",
  //     ],
  //     title: "Baggy Strap Pants",
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 1,
  //     images: [
  //       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl29KUsOt32V7MJIZLpZDVeZJV0LHqs7nY66bT0a57EsW8RmM3Xl4wUbYjBTtkdquIVEGOLII_Q-4ohDFgv7kvpKgyv6p7LJbPmRXWcC8Pgh5F4yHO-YUviw&usqp=CAE",
  //       "",
  //     ],
  //     title: "Acrylic Glasses",
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const { data, loading, error } = useFetch("/products?populate=*");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("hello ", process.env);
  //       const response = await axios.get(
  //         process.env.REACT_APP_API_URL + "/products?populate=*",
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  //           },
  //         }
  //       );
  //       setProducts(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
