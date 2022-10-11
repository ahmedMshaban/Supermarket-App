import { createContext, useState, useEffect } from "react";
import { Product } from "../Product.module";

interface Props {
  children: React.ReactNode;
}

interface AppContextValue {
  cart: Product[];
  isDarkTheme: boolean;
  handleProductAdd: (product: Product) => void;
  handleProductDelete: (id: number) => void;
  handleThemeClick: () => void;
  getCartCount: () => number;
  getTotalPrice: () => number;
  getProductFromCart: (id: number) => Product | undefined;
}

const AppContext = createContext<AppContextValue>({
  cart: [{}],
  isDarkTheme: false,
  handleProductAdd: () => {},
  handleProductDelete: () => {},
  handleThemeClick: () => {},
  getCartCount: () => 0,
  getTotalPrice: () => 0,
  getProductFromCart: () => undefined,
});

const AppProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark; // true or false
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const getCartCount = () => {
    return cart.reduce((total: number, currentProduct: Product) => {
      return total + (currentProduct.quantity as number);
    }, 0);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    return cart.reduce((total: number, currentProduct: Product) => {
      return (
        total +
        (currentProduct.quantity as number) * (currentProduct.price as number)
      );
    }, 0);
  };

  const getProductFromCart = (productId: number) => {
    return cart.find((product: Product) => product.id === productId);
  };

  const handleProductAdd = (newProduct: Product) => {
    //Check if product exists
    let existsProduct = cart.find((product) => newProduct.id === product.id);

    //Add new product to the cart
    if (!existsProduct) {
      setCart((prevCart) => [...prevCart, newProduct]);
    } else {
      //Update existing product
      setCart((prevCart) =>
        prevCart.map((product) => {
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

  const handleProductDelete = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const handleThemeClick = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        isDarkTheme,
        handleProductAdd,
        handleProductDelete,
        handleThemeClick,
        getCartCount,
        getTotalPrice,
        getProductFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
