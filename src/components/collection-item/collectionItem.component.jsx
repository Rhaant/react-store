import React from "react";
import cx from "classnames";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/customButton.component";

import styles from "./collectionItem.module.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className={cx(styles.collectionItem, "box")}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}$</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        inverted
        className={styles.customButton}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
