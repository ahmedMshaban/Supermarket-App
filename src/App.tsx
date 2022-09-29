import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Home,
  About,
  Cart,
  Navbar,
  Products,
  ProductDetails,
} from "./components";

const App: React.FC = () => {
  const [cart, setCart] = useState([]);

  const handleProductAdd = (newProduct: {
    name: string;
    id: number;
    description: string;
    image: string;
    price: number;
    price_id: string;
  }) => {
    console.log("Adding product " + newProduct.id);
  };

  const handleProductDelete = (id: number) => {
    console.log("Deleting product " + id);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
