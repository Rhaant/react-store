import React from "react";

import styles from "./sign.module.scss";

import MainLayout from "../components/layout/mainLayout.component";
import SignIn from '../components/signIn/singIn.component'
import SignUp from '../components/singUp/signUp.component'

const Sign = () => {
  return (
    <MainLayout>
      <div className={styles.sign}>
          <SignIn />
          <SignUp />
    </div>
    </MainLayout>
  );
};

export default Sign;
