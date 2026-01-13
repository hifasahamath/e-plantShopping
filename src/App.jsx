import { Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./components/AboutUs.jsx";
import "./App.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="landing">
            <div className="overlay">
              <h1 className="title">Paradise Nursery</h1>
              <p className="subtitle">
                bring nature home with beautiful indoor plants 🌿
              </p>
              <div className="landing-actions">
                <button className="btn" onClick={() => navigate("/plants")}>
                  Get Started
                </button>
                <button className="btn secondary" onClick={() => navigate("/about")}>
                  About Us
                </button>
              </div>
            </div>
          </div>
        }
      />

      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
