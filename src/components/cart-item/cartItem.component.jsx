import React from "react";
import { connect } from "react-redux";

import { changeQuantity } from "../../redux/cart/cart.actions";

import styles from "./cartItem.module.scss";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ item, changeQuantity }) => {
  const { name, imageUrl, quantity, price } = item;
  const totalPrice = quantity * Number(price);

  const handleClick = (e) =>(
    changeQuantity(item, e.currentTarget.value)
    // console.log(item, e.currentTarget.value)
)
  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.cartDescription}>
        <div className={styles.title}>{name}</div>
        <div className={styles.quantity}>
          <span className={styles.padd}>quantity:</span>
          <button onClick={handleClick} value="up">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <span className={styles.padd}>{quantity}</span>
          <button onClick={handleClick} value="down">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div className={styles.price}>price: {price}</div>
        <div className={styles.total}>total price: {totalPrice}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (item, action) => dispatch(changeQuantity(item, action)),
});

export default connect(null, mapDispatchToProps)(CartItem);
