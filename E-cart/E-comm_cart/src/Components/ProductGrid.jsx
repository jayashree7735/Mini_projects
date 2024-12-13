import React from "react";
import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
  { id: 4, name: "Camera", price: 500 },
];

const ProductGrid = () => {
  const { cart, dispatch } = useCart();

  // Check if product is in cart
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          {isInCart(product.id) ? (
            <button
              style={styles.button}
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product.id })}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={styles.button}
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductGrid;
