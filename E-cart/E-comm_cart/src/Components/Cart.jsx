import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div style={styles.cart}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={styles.item}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  cart: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  item: {
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
};

export default Cart;
