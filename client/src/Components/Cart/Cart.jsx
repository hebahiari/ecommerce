import "./cart.scss";
import { DeleteOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  };

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
                  <div className="price">
                    {item.quantity} x ${item.price}
                  </div>
                  <DeleteOutline
                    className="remove"
                    onClick={() => dispatch(removeItem(item.id))}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Subtotal:</span>
            <span>${totalPrice()}</span>
          </div>
          <div className="checkout">
            <span className="reset" onClick={() => dispatch(resetCart())}>
              Reset cart
            </span>
            <button>Proceed to checkout</button>
          </div>
        </>
      ) : (
        <div className="empty">Cart is empty</div>
      )}
    </div>
  );
}
