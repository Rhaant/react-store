import { CartActionsTypes } from "./cart.types";

export const addItem = (item) => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM,
  payload: item,
})

export const changeQuantity = (item, action) => ({
  type: CartActionsTypes.CHANGE_QUANTITY,
  payload: { item: item, action: action },
});
