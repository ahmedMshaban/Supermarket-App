import React from "react";

interface Props {
  storage: string;
}

export const ProductDetailStorage: React.FC<Props> = ({ storage }) => {
  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
};
