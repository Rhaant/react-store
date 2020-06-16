import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/sign">Sign In</Link>
          </li>
          <li>
            <Link to="/shop">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
