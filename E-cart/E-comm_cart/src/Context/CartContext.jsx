import React, { createContext, useReducer, useContext } from "react";

// Initial State
const initialState = {
  cart: [],
};

// Reducer to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// Provide Context to components
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use CartContext
export const useCart = () => useContext(CartContext);
