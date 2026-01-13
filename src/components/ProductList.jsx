import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // indoor foliage (6)
  {
    id: "p1",
    name: "Monstera Deliciosa",
    price: 5500,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p2",
    name: "Snake Plant",
    price: 3200,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32b9a67?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p3",
    name: "Peace Lily",
    price: 4000,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e16?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p4",
    name: "ZZ Plant",
    price: 4600,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1614594975356-2dc0c548e51e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p5",
    name: "Pothos",
    price: 2500,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1598880940245-3d7c07c2a26c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p6",
    name: "Rubber Plant",
    price: 5200,
    category: "Indoor Foliage",
    image:
      "https://images.unsplash.com/photo-1614594974974-6c0cc73b7a7a?auto=format&fit=crop&w=800&q=60",
  },

  // succulents (6)
  {
    id: "p7",
    name: "Aloe Vera",
    price: 2200,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1598880940131-2fe31abc4ed4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p8",
    name: "Echeveria",
    price: 1800,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p9",
    name: "Jade Plant",
    price: 2600,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1524593119773-6f9aa1b0e5d5?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p10",
    name: "Haworthia",
    price: 1700,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1587500154541-1cafd74f0b79?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p11",
    name: "String of Pearls",
    price: 3000,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1615485737651-58015b9b3cd8?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p12",
    name: "Zebra Cactus",
    price: 1900,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1598880940270-7a2fd2a6f7a1?auto=format&fit=crop&w=800&q=60",
  },

  // flowering (6)
  {
    id: "p13",
    name: "Anthurium",
    price: 4800,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1625156361018-2e1c4a38f0e2?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p14",
    name: "Orchid",
    price: 6500,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1524593119633-40d4d0f25f1a?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p15",
    name: "African Violet",
    price: 2400,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1614594975414-06f1fdf1a4bb?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p16",
    name: "Begonia",
    price: 2800,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p17",
    name: "Geranium",
    price: 2300,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1524593119644-7c8a1d5a8f3b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "p18",
    name: "Kalanchoe",
    price: 2100,
    category: "Flowering",
    image:
      "https://images.unsplash.com/photo-1524593119790-6d43f5201fa1?auto=format&fit=crop&w=800&q=60",
  },
];

export default function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((p) => p.category))];
  const isInCart = (id) => cartItems.some((i) => i.id === id);

  return (
    <div className="container page">
      <h2>Plants</h2>
      <p className="muted">choose your favorites and add them to your cart.</p>

      {categories.map((cat) => (
        <div className="section" key={cat}>
          <h3>{cat}</h3>

          <div className="grid">
            {plants
              .filter((p) => p.category === cat)
              .map((p) => (
                <div className="card" key={p.id}>
                  <img
                    className="thumb"
                    src={p.image}
                    alt={p.name}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60";
                    }}
                  />

                  <h4>{p.name}</h4>
                  <div className="price">Rs. {p.price.toLocaleString()}</div>

                  <button
                    className="addbtn"
                    disabled={isInCart(p.id)}
                    onClick={() => dispatch(addItem(p))}
                  >
                    {isInCart(p.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 18 }}>
        <button className="btn primary" onClick={() => setPage("cart")}>
          Go to Cart
        </button>
      </div>
    </div>
  );
}
