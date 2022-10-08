import React, { useContext } from "react";
import { Button } from "../components/ui";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import { Product as ProductData } from "../Product.module";

interface Props {
  name: string;
  id: number;
  description: string;
  image: string;
  price: number;
  price_id: string;
}

export const Product: React.FC<Props> = ({
  name,
  id,
  description,
  image,
  price,
  price_id,
}) => {
  const { cart, handleProductAdd, handleProductDelete, getProductFromCart } =
    useContext(AppContext);

  const productFromCart = getProductFromCart(id);
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
          {quantity > 0 && <div className="product-quantity">{quantity}</div>}
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <Button
              onClick={handleProductDelete.bind(null, id)}
              outline
              className="product-delete"
            >
              x
            </Button>
          )}
        </div>

        <Button
          onClick={handleProductAdd.bind(null, {
            name,
            id,
            image,
            price,
            price_id,
            quantity: 1,
          })}
          outline
        >
          ${price}
        </Button>
      </div>
    </div>
  );
};

export default Product;
