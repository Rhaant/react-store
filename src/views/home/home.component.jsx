import React from "react";

import styles from "./home.module.scss";

import MainLayout from "../../components/layout/mainLayout.component";
import Hero from "../../components/hero/hero.component";

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <Hero />
      </div>
    </MainLayout>
  );
};

export default Home;
