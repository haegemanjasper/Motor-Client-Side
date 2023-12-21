// ShoppingCartContext.jsx
import React, { createContext, useContext, useReducer } from "react";

export const ShoppingCartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    // Add more cases for updating or removing items if needed
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
