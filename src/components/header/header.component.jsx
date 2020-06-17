import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import styles from "./header.module.scss";

const Header = ({ currentUser }) => (
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
          {console.log(currentUser)}
          {currentUser ? (
            <Link to="/" onClick={() => auth.signOut()}>
              Sign Out
            </Link>
          ) : (
            <Link  to="/sign">
              Sign In
            </Link>
          )}
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
const mapStateToProps = ({ user: {currentUser} }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Header);
