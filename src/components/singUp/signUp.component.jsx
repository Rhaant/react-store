import React from "react";

import styles from "./signUp.module.scss";

import FormInput from "../form-input/formInput.component";
import CustomButton from "../custom-button/customButton.component";
import FormProvider from "../../Providers/Form";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <FormProvider
        render={(data) => (
          <form
            id="signUp"
            className={styles.signUpForm}
            onSubmit={data.handleSubmit}
          >
            <FormInput
              type="text"
              name="displayName"
              handleChange={data.handleInputChange}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              handleChange={data.handleInputChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              handleChange={data.handleInputChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              handleChange={data.handleInputChange}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit"> SIGN UP </CustomButton>
          </form>
        )}
      />
    </div>
  );
};

export default SignUp;
