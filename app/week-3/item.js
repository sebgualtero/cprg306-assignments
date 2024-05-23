import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-darkGray p-3 m-3 w-64">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-lg-white">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
