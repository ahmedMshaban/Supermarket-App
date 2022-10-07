import React from "react";
import { Button } from "../components/ui";

interface Props {
  details: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
  onProductAdd: (params: { [key: string]: string | number }) => void;
}

export const ProductDetailInfo: React.FC<Props> = ({
  name,
  id,
  image,
  details,
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
        {details}
      </p>
      <Button onClick={handleProductAdd}>${price}</Button>
    </>
  );
};
