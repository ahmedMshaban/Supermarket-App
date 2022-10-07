import React from "react";

interface Props {
  delivery: string;
}

export const ProductDetailDelivery: React.FC<Props> = ({ delivery }) => {
  return (
    <p>
      Delivery Estimated <strong>{delivery} business days</strong> - UPS
      Michigan
    </p>
  );
};
