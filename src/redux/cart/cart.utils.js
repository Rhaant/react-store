export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: (cartItem.quantity + 1) * cartItem.price,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1, totalPrice: cartItemToAdd.price }];
};

export const changeQuantity = (cartItems, selectedItem) => {
  if (selectedItem.action === "up") {
    return cartItems.map((cartItem) =>
      cartItem.id === selectedItem.item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1, totalPrice: (cartItem.quantity + 1) * cartItem.price, }
        : cartItem
    );
  } else if (
    (selectedItem.action === "down") &
    (selectedItem.item.quantity > 1)
  ) {
    return cartItems.map((cartItem) =>
      cartItem.id === selectedItem.item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1, totalPrice: (cartItem.quantity - 1) * cartItem.price,  }
        : cartItem
    );
  } else return cartItems;
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
