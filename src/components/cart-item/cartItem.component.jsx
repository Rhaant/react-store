import React from "react";
import { connect } from "react-redux";

import { changeQuantity, removeItem } from "../../redux/cart/cart.actions";

import styles from "./cartItem.module.scss";

import {
  faChevronUp,
  faChevronDown,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ item, changeQuantity, removeItem }) => {
  const { name, imageUrl, quantity, price, totalPrice } = item;

  const handleClick = (e) => changeQuantity(item, e.currentTarget.value);

  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
        <FontAwesomeIcon
          icon={faTimesCircle}
          className={styles.remove}
          onClick={() => removeItem(item)}
        />
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
  removeItem: (item) => dispatch(removeItem(item)),
});


export default connect(null, mapDispatchToProps)(CartItem);
