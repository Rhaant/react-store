import React from "react";

import styles from "./signIn.module.scss";

import FormProvider from "../../Providers/Form";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/customButton.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  return (
    <div className={styles.SignIn}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>sign in with your email and password</span>
      <FormProvider
        render={(data) => (
          <form id="signIn" onSubmit={data.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              label="email"
              handleChange={data.handleInputChange}
            />
            <FormInput
              name="password"
              type="password"
              label="password"
              handleChange={data.handleInputChange}
            />
            <div className={styles.buttons}>
              <CustomButton type="submit" value="Submit Form">
                Sign In
              </CustomButton>
              <CustomButton
                type="button"
                onClick={signInWithGoogle}
                isGoogleSignIn
              >
                Sign In With Google
              </CustomButton>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default SignIn;
