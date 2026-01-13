import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/CartSlice.jsx";

export default function CartItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <div className="navbar">
        <div className="nav-inner">
          <div style={{ fontWeight: 800 }}>Paradise Nursery</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart" className="cart-badge">
              🛒 <span>{totalCount}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="page">
        <h2>Shopping Cart</h2>

        {items.length === 0 ? (
          <>
            <p className="muted">your cart is empty.</p>
            <button className="linkbtn" onClick={() => navigate("/plants")}>
              Continue Shopping
            </button>
          </>
        ) : (
          <>
            <div className="cart-table">
              {items.map((item) => (
                <div className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <div style={{ fontWeight: 800 }}>{item.name}</div>
                    <div className="muted">
                      unit price: Rs. {item.price.toLocaleString()}
                    </div>
                    <div className="muted">
                      total: Rs. {(item.price * item.quantity).toLocaleString()}
                    </div>

                    <div className="qty" style={{ marginTop: 8 }}>
                      <button onClick={() => dispatch(decreaseQty(item.id))}>
                        -
                      </button>
                      <div style={{ fontWeight: 800 }}>{item.quantity}</div>
                      <button onClick={() => dispatch(increaseQty(item.id))}>
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="checkout-bar">
              <div className="big">
                Total Amount: Rs. {totalAmount.toLocaleString()}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  className="linkbtn"
                  onClick={() => alert("Coming Soon")}
                >
                  Checkout
                </button>
                <button className="btn secondary" onClick={() => navigate("/plants")}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
