import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./app.module.scss";

import Home from "./views/home/home.component";
import Sign from "./views/sign/sign.component";
import ShopView from "./views/shop/shop.component";
import Cart from './views/cart/cart.component'
import Collection from './views/collection/collection.component'

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";


const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      return () => {
        unSubscribe()
      }
    });
  }, [setCurrentUser]);

  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={ShopView} />
        <Route
          exact
          path="/sign"
          render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
        />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/shop/:id' component={Collection} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(dispatch(setCurrentUser(user))),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
