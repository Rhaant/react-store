import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import styles from "./mobileMenu.module.scss";

const MobileMenu = ({ isOpen, currentUser, auth, itemCount, handleClick }) => {

    const compileHandler = () =>{
        auth.signOut();
        handleClick()
    }

  return (
    <div
      className={
        isOpen ? cx(styles.mobileMenu, styles.openMenu) : styles.mobileMenu
      }
    >
        <Link onClick={handleClick} to='/shop'>Shop</Link>
        {currentUser ? (
              <Link  to="/" onClick={compileHandler}>
                Sign Out
              </Link>
            ) : (
              <Link onClick={handleClick} to="/sign">Sign In</Link>
            )}
        <Link onClick={handleClick} to="/contact">Contact</Link>
        <Link onClick={handleClick} to='/cart'>Cart {itemCount}</Link>
    </div>
  );
};

export default MobileMenu;
