import "./cart.scss";
import { DeleteOutline } from "@mui/icons-material";
import { useSelector } from "react-redux";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="cart">
      {products?.length ? (
        <>
          <h1>Products in your cart:</h1>
          {products?.map((item) => (
            <div className="item" key={item.id}>
              <img src={process.env.REACT_APP_BASE_URL + item.image} alt="" />
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
        </>
      ) : (
        <div className="empty">Cart is empty</div>
      )}
    </div>
  );
}
