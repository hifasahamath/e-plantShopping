import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div className="navbar">
        <div className="nav-inner">
          <div style={{ fontWeight: 800 }}>Paradise Nursery</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
          </div>
        </div>
      </div>

      <div className="page">
        <h2>About Paradise Nursery</h2>
        <p className="muted">
          Paradise Nursery is a friendly online plant shop that helps people bring
          nature into their homes. We believe plants make spaces healthier, calmer,
          and more beautiful.
        </p>
        <p className="muted">
          Our nursery offers a curated selection of indoor plants, from easy-care
          options for beginners to statement pieces for plant lovers. Each plant
          comes with simple care tips so you can keep it thriving.
        </p>
        <p className="muted">
          Thanks for supporting our little green paradise 🌿
        </p>
      </div>
    </>
  );
}
