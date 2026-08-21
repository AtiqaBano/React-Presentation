const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
let products = [
  {
    id: 1,
    name: "Midnight Zinger Special",
    category: "Burgers",
    price: 499,
    rating: 4.9,
    badge: "Bestseller",
    image:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description:
      "Crispy chicken fillet, fresh lettuce, cheese and our signature Midnight sauce.",
  },

  {
    id: 2,
    name: "Loaded Fries",
    category: "Fries",
    price: 349,
    rating: 4.8,
    badge: "Hot Pick",
    image:
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    description:
      "Golden crispy fries loaded with melted cheese, special sauces and spicy seasoning.",
  },

  {
    id: 3,
    name: "Midnight Pizza",
    category: "Pizza",
    price: 899,
    rating: 4.9,
    badge: "Fan Favorite",
    image:
    "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
    description:
      "Freshly baked pizza loaded with mozzarella, chicken, vegetables and signature sauce.",
  },

  {
    id: 4,
    name: "Crispy Wings",
    category: "Wings",
    price: 599,
    rating: 4.8,
    badge: "Spicy 🔥",
    image:
     "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    description:
      "Crispy golden chicken wings tossed in our delicious signature spicy sauce.",
  },

  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 299,
    rating: 4.7,
    badge: "Sweet",
    image:
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description:
      "Rich, soft and fudgy chocolate brownie served warm for the perfect midnight treat.",
  },

  {
    id: 6,
    name: "Cold Coffee",
    category: "Drinks",
    price: 349,
    rating: 4.8,
    badge: "Refreshing",
    image:
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    description:
      "Creamy chilled coffee blended with milk and chocolate for a refreshing late-night drink.",
  },
];

app.get("/", (req, res) => {
  res.send("Midnight Cravings API is running 🌙🍔");
});


app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  console.log("ID RECEIVED:", req.params.id);

  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
