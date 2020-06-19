import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors";

import styles from "./cart.module.scss";

import MainLayout from "../../components/layout/mainLayout.component";
import CartItem from "../../components/cart-item/cartItem.component";

const Cart = ({ cartItems, totalPrice }) => {
  return (
    <MainLayout>
      <div className={styles.cart}>
        <h1>Cart:</h1>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span> Your Cart is Empty</span>
        )}
        <div className={styles.resume}>
          <span>Total Value: {totalPrice} </span>
        </div>
      </div>
    </MainLayout>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
