import React from "react";
import { CartProvider } from "./CartContext";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

const App = () => {
  return (
    <CartProvider>
      <div style={styles.app}>
        <h1>E-Comm Shopping Cart</h1>
        <ProductGrid />
        <Cart />
      </div>
    </CartProvider>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
};

export default App;
