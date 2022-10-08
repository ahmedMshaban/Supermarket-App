import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

import {
  Home,
  About,
  Cart,
  Navbar,
  Products,
  ProductDetails,
  AppProvider,
} from "./components";

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppProvider>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </AppProvider>
    </HashRouter>
  );
};

export default App;
