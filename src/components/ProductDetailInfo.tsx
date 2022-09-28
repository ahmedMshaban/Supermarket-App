import React from "react";

interface Props {
  description: string;
  price: number;
}

export const ProductDetailInfo: React.FC<Props> = ({ description, price }) => {
  return (
    <>
      <p>
        {description} sold at <strong>${price}</strong> per piece.
      </p>
      <button>${price}</button>
    </>
  );
};
