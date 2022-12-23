import "./cart.scss";
import { DeleteOutline } from "@mui/icons-material";

export default function Cart() {
  const data = [
    {
      id: 1,
      images: [
        "https://gothbb.com/wp-content/uploads/2022/04/Cool-Girl-Locomotive-Short-Top_1-600x600.jpg",
        "https://gothbb.com/wp-content/uploads/2022/04/Cool-Girl-Locomotive-Short-Top_3-600x600.jpg",
      ],
      title: "Mesh Belted Top",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, turpis et dictum bibendum, magna magna accumsan eros, hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi. Vestibulum et consequat sem. Nullam varius tempor sapien vel vestibulum.",

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
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, turpis et dictum bibendum, magna magna accumsan eros, hendrerit auctor lectus lectus id nulla. Fusce vitae nisi mi. Vestibulum et consequat sem. Nullam varius tempor sapien vel vestibulum.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart:</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.images[0]} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="bottom">
              <div className="price">1 x ${item.price}</div>
              <DeleteOutline className="remove" />
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Subtotal:</span>
        <span>$255</span>
      </div>
      <div className="checkout">
        <span className="reset">Reset cart</span>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}
