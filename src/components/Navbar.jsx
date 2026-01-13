import React from "react";
import { useSelector } from "react-redux";

export default function Navbar({ page, setPage }) {
  const items = useSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-inner">
          <div className="brand" style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
            Paradise Nursery
          </div>

          <div className="nav-links">
            <button
              type="button"
              className="navbtn"
              onClick={() => setPage("home")}
              aria-current={page === "home"}
            >
              Home
            </button>

            <button
              type="button"
              className="navbtn"
              onClick={() => setPage("plants")}
              aria-current={page === "plants"}
            >
              Plants
            </button>

            <button
              type="button"
              className="cart-pill"
              onClick={() => setPage("cart")}
              aria-current={page === "cart"}
            >
              🛒 {totalCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
