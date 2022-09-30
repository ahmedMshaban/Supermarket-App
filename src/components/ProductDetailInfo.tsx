import React from "react";
import { Button } from "../components/ui";

interface Props {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
  onProductAdd: ({
    name,
    id,
    image,
    price,
    price_id,
    quantity
  }: {
    name: string;
    id: number;
    image: string;
    price: number;
    price_id: string;
    quantity: number
  }) => void;
}

export const ProductDetailInfo: React.FC<Props> = ({
  name,
  id,
  image,
  description,
  price,
  price_id,
  onProductAdd,
}) => {
  const handleProductAdd = () => {
    onProductAdd({ name, id, image, price, price_id, quantity: 1 });
  };

  return (
    <>
      <p>
        {description} sold at <strong>${price}</strong> per piece.
      </p>
      <Button onClick={handleProductAdd}>${price}</Button>
    </>
  );
};
