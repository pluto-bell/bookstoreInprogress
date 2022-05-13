import React, { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  totalItems: 0,
  addItem: (addItemHandler) => {},
  removeItem: (removeItemHandler) => {},
  itemIsAdded: (itemIsAddedHandler) => {},
});

export function CartContextProvider(props) {
  const [userCart, setUserCart] = useState([]);
  const context = {
    items: userCart,
    totalItems: userCart.length,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    itemIsAdded: itemIsAddedHandler,
  };

  function addItemHandler(cartItem) {
    setUserCart((prevUserCart) => {
      return prevUserCart.concat(cartItem);
    });
  }

  function removeItemHandler(itemId) {
    setUserCart((prevUserCart) => {
      return prevUserCart.filter((item) => item._id !== itemId);
    });
  }

  function itemIsAddedHandler(itemId) {
    return userCart.some((item) => item._id === itemId);
  }

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
