import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [page, setPage] = useState("home"); // home | plants | cart | about

  return (
    <div>
      {/* navbar should show on plants/cart/about (optional on home) */}
      {page !== "home" && <Navbar page={page} setPage={setPage} />}

      {page === "home" && (
        <div className="landing">
          <div className="hero">
            <h1>Welcome to Paradise Nursery</h1>
            <p>bring nature home with beautiful indoor plants 🌿</p>

            <div className="hero-actions">
              <button className="btn primary" onClick={() => setPage("plants")}>
                Get Started
              </button>
              <button className="btn secondary" onClick={() => setPage("about")}>
                About Us
              </button>
            </div>
          </div>
        </div>
      )}

      {page === "plants" && <ProductList setPage={setPage} />}
      {page === "cart" && <CartItem setPage={setPage} />}
      {page === "about" && <AboutUs />}
    </div>
  );
}

export default App;
