import React from "react";
import "./App.css";
import { Button, Input } from "./components/ui";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, About, Cart, Navbar, Products } from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
