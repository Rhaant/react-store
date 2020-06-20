import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import styles from "./header.module.scss";

import Burger from "../burger/burger.component";
import MobileMenu from "../mobile-menu/mobileMenu.component";

const Header = ({ currentUser, cartItems }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  let itemCount = 0;
  if (cartItems.length) {
    itemCount = cartItems.reduce(
      (totalValue, cartItem) => totalValue + cartItem.quantity,
      0
    );
  }

  return (
    <div className={styles.header}>
      <MobileMenu
        itemCount={itemCount}
        isOpen={open}
        auth={auth}
        currentUser={currentUser}
        handleClick={toggleOpen}
      />
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            {currentUser ? (
              <Link to="/" onClick={() => auth.signOut()}>
                Sign Out
              </Link>
            ) : (
              <Link to="/sign">Sign In</Link>
            )}
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart {itemCount}</Link>
          </li>
        </ul>
      </div>
      <Burger isOpen={open} handleClick={toggleOpen} />
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { cartItems } }) => ({
  currentUser,
  cartItems,
});

export default connect(mapStateToProps)(Header);
