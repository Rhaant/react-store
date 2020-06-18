import React from "react";
import { connect } from "react-redux";

import styles from "./cart.module.scss";

import MainLayout from "../../components/layout/mainLayout.component";
import CartItem from "../../components/cart-item/cartItem.component";

const Cart = ({ cartItems }) => {

  return (
    <MainLayout>
      <div className={styles.cart}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span> Your Cart is Empty</span>
        )}
      </div>
    </MainLayout>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
