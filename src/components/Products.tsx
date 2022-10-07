import { useState, useEffect } from "react";
import { Product } from ".";
import { useFetch } from "../hooks";
import { Loader } from "./ui";

interface ProductData {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
}

interface Product {
  [key: string]: string | number;
}

interface Props {
  cart: Product[];
  onProductAdd: (params: { [key: string]: string | number }) => void;
  onProductDelete: <T extends number>(id: T) => void;
}

export const Products: React.FC<Props> = ({
  cart,
  onProductAdd,
  onProductDelete,
}) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const { get, loading } = useFetch(
    "https://orangeinsoles-c0976-default-rtdb.firebaseio.com/"
  );

  useEffect(() => {
    get<ProductData[]>("products.json")
      .then((data) => {
        if (data) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Shop Our Premium Insoles...</p>
      <div className="products-grid">
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => {
            return (
              <Product
                key={product.id}
                description={product.description}
                image={product.image}
                name={product.name}
                id={product.id}
                price={product.price}
                price_id={product.price_id}
                cart={cart}
                onProductAdd={onProductAdd}
                onProductDelete={onProductDelete}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
