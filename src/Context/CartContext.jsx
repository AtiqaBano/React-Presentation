import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => String(item.id) === String(product.id)
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          String(item.id) === String(product.id)
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
  console.log("CLICKED ID:", id);

  setCart((prevCart) => {
    console.log("BEFORE UPDATE:", prevCart);

    const updatedCart = prevCart.map((item) => {
      console.log(
        "ITEM ID:",
        item.id,
        "QUANTITY:",
        item.quantity
      );

      if (String(item.id) === String(id)) {
        return {
          ...item,
          quantity: Number(item.quantity) + 1,
        };
      }

      return item;
    });

    console.log("AFTER UPDATE:", updatedCart);

    return updatedCart;
  });
};

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          String(item.id) === String(id)
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  // Total items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}