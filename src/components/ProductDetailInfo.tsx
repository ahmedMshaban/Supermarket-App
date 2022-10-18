import React from "react";
import { useAppDispatch } from "../hooks";
import { Button } from "../components/ui";
import { addProduct } from "../store/cartSlice";

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
  const dispatch = useAppDispatch();

  return (
    <>
      <p>{details}</p>
      <Button
        onClick={() =>
          dispatch(
            addProduct({
              name,
              id,
              image,
              price,
              price_id,
              quantity: 1,
            })
          )
        }
      >
        ${price}
      </Button>
    </>
  );
};
