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
  cart: [];
  onProductAdd: ({
    name,
    id,
    description,
    image,
    price,
    price_id,
  }: {
    name: string;
    id: number;
    description: string;
    image: string;
    price: number;
    price_id: string;
  }) => void;
  onProductDelete: (id: number) => void;
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
    onProductAdd({ name, id, description, image, price, price_id });
  };

  const handleProductDelete = () => {
    onProductDelete(id);
  };

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
          <div className="product-quantity">0</div>
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-checkout">
        <div>
          <Button
            onClick={handleProductDelete}
            outline
            className="product-delete"
          >
            x
          </Button>
        </div>
        <Button onClick={handleProductAdd} outline>
          ${price}
        </Button>
      </div>
    </div>
  );
};

export default Product;
