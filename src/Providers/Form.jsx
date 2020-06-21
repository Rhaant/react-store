import React from "react";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

class FormProvider extends React.Component {
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target.id === "signUp") {
      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
        alert("password don't match");
        return;
      }
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      const { email, password } = this.state;

      try {
        await auth.signInWithEmailAndPassword(email, password);

        this.setState({ email: "", password: "" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const renderProps = {
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit,
    };

    return this.props.render(renderProps);
  }
}

export default FormProvider;
