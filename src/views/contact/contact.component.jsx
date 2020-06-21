import React from "react";

import styles from "../../views/contact/contact.module.scss";
import MainLayout from "../../components/layout/mainLayout.component";

const Contact = () => {
  return (
    <MainLayout>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <div className={styles.description}>
          <h2>
            If you want to contact, please send an email or find me through
            linkedin
          </h2>
          <span>email: leszek.synowiec@gmail.com</span>
          <span>
            linkedin:{" "}
            <a href="https://www.linkedin.com/in/leszek-synowiec-7984001a4">
              Leszek Synowiec
            </a>
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact