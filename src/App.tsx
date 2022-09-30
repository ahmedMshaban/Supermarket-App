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
  name: string;
  id: number;
  image: string;
  price: number;
  price_id: string;
  quantity: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    console.log(cart);
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
            return { ...product, quantity: existsProduct.quantity + 1 };
          }
          return product;
        })
      );
    }
  };

  const handleProductDelete = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
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
