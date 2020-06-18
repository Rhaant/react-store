export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const changeQuantity = (cartItems, selectedItem) => {
  if (selectedItem.action === "up") {
    return cartItems.map((cartItem) =>
      cartItem.id === selectedItem.item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else if (selectedItem.action === "down" & selectedItem.item.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === selectedItem.item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ) 
  } else  return cartItems
};
