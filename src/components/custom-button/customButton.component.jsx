import React from "react";

import styles from "./customButton.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? styles.inverted : ""} ${
      isGoogleSignIn ? styles.googleSignIn : ""
    } ${styles.customButton}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
