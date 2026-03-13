import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
}

const setCartItems = (cartItems) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
}       

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const clearCartitem = (cartItems, cartItemToClear) => {   
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

  
export const addItemToCart = (cartItems, productToAdd) => {
    return setCartItems(addCartItem(cartItems, productToAdd));
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return setCartItems(clearCartitem(cartItems, cartItemToClear));
  };
