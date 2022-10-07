import React from "react";

interface Props {
  specs: {
    materials: string;
    gender: string;
    athletic: string;
  };
}

export const ProductDetailSpecs: React.FC<Props> = ({ specs }) => {
  return (
    <table className="table table-specs">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Materials</td>
          <td>{specs.materials}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{specs.gender}</td>
        </tr>
        <tr>
          <td>Athletic/Run</td>
          <td>{specs.athletic ? "Yes" : "No"}</td>
        </tr>
      </tbody>
    </table>
  );
};
