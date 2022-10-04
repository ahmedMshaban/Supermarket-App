import React from "react";
import { Button } from "../components/ui";
import { Link } from "react-router-dom";


interface Props {
  name: string;
  id: number;
  description: string;
  image: string;
  price: number;
  price_id: string;
  cart: Product[];
  onProductAdd: (params: { [key: string]: string | number }) => void;
  onProductDelete: (id: number) => void;
}

interface Product {
  [key: string]: string | number;
}

export const Product: React.FC<Props> = ({
  name,
  id,
  description,
  image,
  price,
  price_id,
  cart,
  onProductAdd,
  onProductDelete,
}) => {
  const handleProductAdd = () => {
    onProductAdd({ name, id, image, price, price_id, quantity: 1 });
  };

  const handleProductDelete = () => {
    onProductDelete(id);
  };

  const productFromCart = cart.find(
    (product: Product) => product.id === id
  ) ?? { quantity: 0 };
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${id}`}>
          <img
            width="100"
            height="100"
            className="product-image"
            alt={name}
            src={image}
          />
        </Link>
        <div className="product-quantity-container">
          {productFromCart && (
            <div className="product-quantity">{quantity}</div>
          )}
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {productFromCart && (
            <Button
              onClick={handleProductDelete}
              outline
              className="product-delete"
            >
              x
            </Button>
          )}
        </div>

        <Button onClick={handleProductAdd} outline>
          ${price}
        </Button>
      </div>
    </div>
  );
};

export default Product;
