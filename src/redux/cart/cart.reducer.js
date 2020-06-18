import { CartActionsTypes } from "./cart.types";
import { addItemToCart, changeQuantity, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionsTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionsTypes.CHANGE_QUANTITY:
      return {
        ...state,
        cartItems: changeQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
