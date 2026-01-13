import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container page">
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <>
          <p className="muted">your cart is empty.</p>
          <button className="btn primary" onClick={() => setPage("plants")}>
            Continue Shopping
          </button>
        </>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-row" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60";
                  }}
                />

                <div>
                  <div style={{ fontWeight: 900 }}>{item.name}</div>
                  <div className="muted">
                    unit price: Rs. {item.price.toLocaleString()}
                  </div>
                  <div className="muted">
                    total: Rs. {(item.price * item.quantity).toLocaleString()}
                  </div>

                  <div className="qty">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          })
                        )
                      }
                    >
                      -
                    </button>

                    <div style={{ fontWeight: 900 }}>{item.quantity}</div>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="checkout-bar">
            <div className="total">
              Total Amount: Rs. {totalAmount.toLocaleString()}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="linkbtn" onClick={() => alert("Coming Soon")}>
                Checkout
              </button>
              <button className="btn secondary" onClick={() => setPage("plants")}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
