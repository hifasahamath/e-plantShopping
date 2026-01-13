import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice.jsx";

const plants = [
  // indoor foliage
  {
    id: "p1",
    name: "Monstera Deliciosa",
    price: 5500,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "p2",
    name: "Snake Plant",
    price: 3200,
    category: "Indoor Foliage",
    image:
      "https://www.thespruce.com/thmb/CpEP-cPmDmz6kwdmVKbhcrdCJuY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg",
  },
  {
    id: "p3",
    name: "Peace Lily",
    price: 4000,
    category: "Indoor Foliage",
    image:
      "https://imgs.search.brave.com/pBX0bbq7jvGxJtW5-LlW7lsslvVZX6VF2-XFakNfY0E/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxtYW5hYy5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvbGFyZ2UvcHVi/bGljL2ltYWdlX25v/ZGVzL3BlYWNlX3Bs/YW50X2dlb3JnaW5h/MTk4X2dldHR5aW1h/Z2VzXzAuanBnP2l0/b2s9cWpWOHYxVTk",
  },
  {
    id: "p4",
    name: "ZZ Plant",
    price: 4600,
    category: "Indoor Foliage",
    image:
      "https://imgs.search.brave.com/n8KN3Bc4JIoV0SLTr1xFzyfskH_Xz1znv3vmpi4ViFc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YmJnLm9yZy9pbWcv/dXBsb2Fkcy9oZXJv/L19saXN0X3RodW1i/bmFpbF9yZXRpbmEv/aG93LXRvLXp6X01v/a2tpZS5qcGc",
  },
  {
    id: "p5",
    name: "Pothos",
    price: 2500,
    category: "Indoor Foliage",
    image:
      "https://imgs.search.brave.com/UFVp0TjFLcAfGQ2oybQC4psLNEuhZF5fYnx2NJKIr1k/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iL3VMUkJH/c2x6b3lXVnE0RGV1/UmxkUVg5X3RLdz0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL3Bv/dGhvcy1hbi1lYXN5/LXRvLWdyb3ctaG91/c2VwbGFudC0xNDAz/MTU0LWhlcm8tZmJj/Zjk4MThjNmZmNGMz/YjliZjJkM2ViNGQw/YmZkZTAuanBn",
  },
  {
    id: "p6",
    name: "Rubber Plant",
    price: 5200,
    category: "Indoor Foliage",
    image:
      "https://imgs.search.brave.com/rHhHnuf164pIFpUHMVT3z3RvbELJyea5Loc7q_diU7c/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxtYW5hYy5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvbGFyZ2UvcHVi/bGljL2ltYWdlX25v/ZGVzL1J1YmJlci1U/cmVlLmpwZz9pdG9r/PUV6ZHBJdzNO",
  },

  // succulents
  {
    id: "p7",
    name: "Aloe Vera",
    price: 2200,
    category: "Succulents",
    image:
      "https://imgs.search.brave.com/9tSvRGPrE6duk1P0rLY8YGBkhegId9VtrnppEJSmocc/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxtYW5hYy5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvbGFyZ2UvcHVi/bGljL2ltYWdlX25v/ZGVzL2Fsb2UtdmVy/YS13aGl0ZS1wb3Rf/c3Vud2FuZDI0LXNz/X2VkaXRfMC5qcGc_/aXRvaz13cE5DOEZB/QQ",
  },
  {
    id: "p8",
    name: "Echeveria",
    price: 1800,
    category: "Succulents",
    image:
      "https://imgs.search.brave.com/hl8pwXYq2g_R1H3eVTo7gRO60eM4e9_61fzY_p_nEiw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wYWNp/ZmljaG9ydGljdWx0/dXJlLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAwNy8xMC9C/YWwuMDIuRWNoZXZl/cmlhLWFnYXYuanBn",
  },
  {
    id: "p9",
    name: "Jade Plant",
    price: 2600,
    category: "Succulents",
    image:
      "https://imgs.search.brave.com/7l9h2UiqpWccDWZaBFi8sq2b1vfBwNeyed2I7oArGh8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9leHRl/bnNpb24uc2RzdGF0/ZS5lZHUvc2l0ZXMv/ZGVmYXVsdC9maWxl/cy9zdHlsZXMvZmFj/ZWJvb2svcHVibGlj/LzIwMjQtMDQvVy0w/MTg4NS0wMS1Ib3Vz/ZXBsYW50LUhvdy1U/by1KYWRlLVBsYW50/LmpwZz9oPWY4MDM3/MGZmJmFtcDtpdG9r/PUhWU2YtOGFO",
  },
  {
    id: "p10",
    name: "Haworthia",
    price: 1700,
    category: "Succulents",
    image:
      "https://imgs.search.brave.com/snEKKstq4zGSc0DqDmQG8DVQjIfW5M8aK9ZmEyYK4XM/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9wbGFu/ZXRkZXNlcnQuY29t/L2Nkbi9zaG9wL2Nv/bGxlY3Rpb25zL2R1/bW15XzE5MjB4NDgw/XzdFOUI0MF83RTlC/NDBfMmIyOTBjZmMt/ODQ5OS00NDNiLWEx/OTEtNjUwYmZkYjY0/ZWEwXzE4MDB4LnBu/Zz92PTE3MDYwMDA5/MDY",
  },
  {
    id: "p11",
    name: "String of Pearls",
    price: 3000,
    category: "Succulents",
    image:
      "https://imgs.search.brave.com/FZy6w13Iukx-wZNycft7IposLNRe9u-6UepY60Ba-ww/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9sYWtl/d29vZHBsYW50Y29t/cGFueS5jb20vY2Ru/L3Nob3AvZmlsZXMv/SU1HXzU4ODEuanBn/P3Y9MTcwMjU3OTc1/MiZ3aWR0aD05ODA",
  },
  {
    id: "p12",
    name: "Zebra Cactus",
    price: 1900,
    category: "Succulents",
    image:
      "https://imgs.search.brave.com/fjkH_eRm5Y15W59LjL0J4P7mFqw30etnhtaFgGcjuB8/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/am95dXNnYXJkZW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA0L1lvdXIt/cGFyYWdyYXBoLXRl/eHQuanBn",
  },

  // flowering
  {
    id: "p13",
    name: "Anthurium",
    price: 4800,
    category: "Flowering",
    image:
      "https://imgs.search.brave.com/ByggSygxx5ZiF1yFC24LpaGCGYf_qZKReJyj1vjRNls/rs:fit:200:200:1:0/g:ce/aHR0cDovL3N0ZXZl/c2xlYXZlcy5jb20v/Y2RuL3Nob3AvY29s/bGVjdGlvbnMvdW5u/YW1lZF8wZWY0OTFk/Zi02MTRjLTRiNTQt/ODQ4Zi0zNzg5NDVj/NGYyZDQuanBnP3Y9/MTczNDEyNDU2MA",
  },
  {
    id: "p14",
    name: "Orchid",
    price: 6500,
    category: "Flowering",
    image:
      "https://imgs.search.brave.com/KXxlWHTG46OzmYRj870W05kZaPUWVJI6mHe40HuqUUQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9mYWly/Y2hpbGRnYXJkZW4u/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzExL0lNR18x/NTMwLXNjYWxlZC5q/cGc",
  },
  {
    id: "p15",
    name: "African Violet",
    price: 2400,
    category: "Flowering",
    image:
      "https://imgs.search.brave.com/YN8pDXngjAVNSRYCfREIp0gg9L3ezwk-vh9rT49QxHg/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/YWxtYW5hYy5jb20v/c2l0ZXMvZGVmYXVs/dC9maWxlcy9zdHls/ZXMvbGFyZ2UvcHVi/bGljL2ltYWdlX25v/ZGVzL2FmcmljYW4l/MjB2aW9sZXQuanBn/P2l0b2s9X2t0LTNI/c2o",
  },
  {
    id: "p16",
    name: "Begonia",
    price: 2800,
    category: "Flowering",
    image:
      "https://imgs.search.brave.com/HSwp5uJtgP3ko160J3mR2nmUf_gcLncFCnTDKrDchTw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/d2hpdGVmbG93ZXJm/YXJtLmNvbS9tYXNf/YXNzZXRzL2NhY2hl/L2ltYWdlL2IvMS8z/LzYvNDUzNjYuSnBn",
  },
  {
    id: "p17",
    name: "Geranium",
    price: 2300,
    category: "Flowering",
    image:
      "https://imgs.search.brave.com/ODzogvFu0M63vcwNNp7qL7V36w7E4FApu_EWCHcg4PI/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FyZGVuZGVzaWdu/LmNvbS9waWN0dXJl/cy9pbWFnZXMvOTAw/eDcwNU1heC9zaXRl/XzMvcm9zZS1pY2Ut/em9uYWwtZ2VyYW5p/dW0tcGVsYXJnb25p/dW0tem9uYWxlLXBy/b3Zlbi13aW5uZXJz/XzE2ODAyLmpwZw",
  },
  {
    id: "p18",
    name: "Kalanchoe",
    price: 2100,
    category: "Flowering",
    image:
      "https://imgs.search.brave.com/urE_WAhQdb0H_KjE3E98NL_nMvHqARKxxkckGVYEAMQ/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvZmlyc3Qt/dGltZS10YWtpbmct/Y2FyZS1vZi1hLXBs/YW50LWktZ290LWEt/a2FsYW5jaG9lLWFu/ZC1pLXYwLXAzOHo1/anc0eW52OTEuanBn/P3dpZHRoPTQwMDAm/Zm9ybWF0PXBqcGcm/YXV0bz13ZWJwJnM9/N2YwMTViMjUzYmNh/MmE1ZDk1NjM2NTcy/NWUzMDljNTgzMjdj/YTA3NQ",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [...new Set(plants.map((p) => p.category))];

  const isInCart = (id) => cartItems.some((i) => i.id === id);

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
        <h2>Plants</h2>
        <p className="muted">
          choose your favorites and add them to your cart.
        </p>

        {categories.map((cat) => (
          <div key={cat} style={{ marginTop: 24 }}>
            <h3>{cat}</h3>
            <div className="grid">
              {plants
                .filter((p) => p.category === cat)
                .map((p) => (
                  <div className="card" key={p.id}>
                    <img className="thumb" src={p.image} alt={p.name} />
                    <h4 style={{ margin: "10px 0 6px" }}>{p.name}</h4>
                    <div className="price">Rs. {p.price.toLocaleString()}</div>
                    <button
                      className="addbtn"
                      disabled={isInCart(p.id)}
                      onClick={() => dispatch(addToCart(p))}
                    >
                      {isInCart(p.id) ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
