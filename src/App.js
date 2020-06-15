import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./app.module.scss";

import Home from "./views/home.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className={styles.app}>
      <Header />
        <Router>
          <Route path="/" component={Home} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
