import React from "react";
import { Link } from "react-router-dom";

import styles from "./heroLink.module.scss";

const HeroLink = ({ title, imageUrl, linkUrl }) => {
  return (
    <Link
      to={linkUrl}
      className={styles.heroLink}
    >
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
};

export default HeroLink;
