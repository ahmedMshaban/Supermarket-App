import { useContext } from "react";
import React from "react";
import { Button } from "../components/ui";
import { AppContext } from "./AppContext";

interface Props {
  details: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
}

export const ProductDetailInfo: React.FC<Props> = ({
  name,
  id,
  image,
  details,
  price,
  price_id,
}) => {
  const { handleProductAdd } = useContext(AppContext);

  return (
    <>
      <p>{details}</p>
      <Button
        onClick={handleProductAdd.bind(null, {
          name,
          id,
          image,
          price,
          price_id,
          quantity: 1,
        })}
      >
        ${price}
      </Button>
    </>
  );
};
