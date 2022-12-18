import Card from "../../../Components/Card/Card";
import "./list.scss";

export default function List({ categoryId, maxPrice, sort }) {
  const data = [
    {
      id: 1,
      images: [
        "https://gothbb.com/wp-content/uploads/2022/04/Cool-Girl-Locomotive-Short-Top_1-600x600.jpg",
        "https://gothbb.com/wp-content/uploads/2022/04/Cool-Girl-Locomotive-Short-Top_3-600x600.jpg",
      ],
      title: "Mesh Belted Top",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      images: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlEG0IWG8Hz1s34-LKs4FgWFIuwDyd-k5nF2qww0gWygubAJ5xFUTWYK2mM9eynrc9J0VN5u46Wy4N5bTrhOlelVFlr1hx&usqp=CAY",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJFk5k-qUAynYQLRZGWYIKObVBEwnGyrUMu2QPdTg3gAOArJsK09y2ksiaKqb2UN0VEZoVaDAB5N8fbif5XFLMejjHYKoLUQ&usqp=CAY",
      ],
      title: "Baggy Chain Pants",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      images: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyd1M479KdAhqFrIUYgoslGRmXXIlY9wXi9ByqpyDXiJuAk_vT52SaWlbdByW8fiW-ZDg6IlsZ7dG7nuBeZL8GnGcvdQC3rg&usqp=CAY",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTSSWjvnTxbSk9FhvMtLhFR3NISPoT6o3KxRsP7LkA7SCRXz06gkxTpN1EpXUqPD6wOqIWiOOVBgiLZ543Z4p_xC9U4_0cw&usqp=CAY",
      ],
      title: "Baggy Strap Pants",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      images: [
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl29KUsOt32V7MJIZLpZDVeZJV0LHqs7nY66bT0a57EsW8RmM3Xl4wUbYjBTtkdquIVEGOLII_Q-4ohDFgv7kvpKgyv6p7LJbPmRXWcC8Pgh5F4yHO-YUviw&usqp=CAE",
        "",
      ],
      title: "Acrylic Glasses",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
