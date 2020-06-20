import React from "react";
import cx from "classnames";

import styles from "./burger.module.scss";

const Burger = ({ isOpen, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={isOpen ? cx(styles.burger, styles.open) : styles.burger}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default Burger;
