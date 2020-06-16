import React, { useState } from "react";

import styles from "./formInput.module.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const [shrink, setShrink] = useState("");

  const handleInputChange = (e) => {
    setShrink(e.target.value);
    handleChange(e);
  };

  return (
    <div className={styles.group}>
      <input
        className={styles.formInput}
        onChange={handleInputChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${shrink.length ? styles.shrink : ""} ${
            styles.formInputLabel
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
