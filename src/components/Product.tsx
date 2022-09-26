import React from "react";
import { Button } from "../components/ui";

interface Props {
  name: string;
  description: string;
  image: string;
  price: number;
  price_id: string;
}

export const Product: React.FC<Props> = ({
  name,
  description,
  image,
  price,
  price_id,
}) => {
  return (
    <div className="product">
      <div className="product-image-container">
        <img
          width="100"
          height="100"
          className="product-image"
          alt={name}
          src={image}
        />
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
          <Button outline className="product-delete">x</Button>
        </div>
        <Button outline>${price}</Button>
      </div>
    </div>
  );
};

export default Product;
