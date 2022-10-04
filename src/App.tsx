import React, { useState, useEffect } from "react";
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

interface Product {
  [key: string]: string | number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleProductAdd = (newProduct: Product) => {
    //Check if product exists
    let existsProduct = cart.find((product) => newProduct.id === product.id);

    //Add new product to the cart
    if (!existsProduct) {
      setCart([...cart, newProduct]);
    } else {
      //Update existing product
      setCart(
        cart.map((product) => {
          if (product.id === existsProduct?.id) {
            return {
              ...product,
              quantity: (existsProduct.quantity as number) + 1,
            };
          }
          return product;
        })
      );
    }
  };

  function handleProductDelete<T extends number>(id: T) {
    setCart(cart.filter((product) => product.id !== id));
  }

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
