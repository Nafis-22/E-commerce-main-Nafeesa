import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalState from "./context/GlobalState";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import "./App.css";

const App = (props) => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/login" component={LoginPage} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
