import React from "react";

export default function Item({ itemObj, onSelect }) {
  let { name, quantity, category } = itemObj;

  return (
    <li
      className="bg-slate-700 p-3 m-3 w-80 cursor-pointer hover:bg-orange-800"
      onClick={() => onSelect(itemObj)}
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-lg-white">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
