"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ itemsList }) {
  let itemArray = itemsList.map((item) => ({ ...item }));

  let buttonStyle = "bg-blue-500";

  let [sort, setSortBy] = useState("name");

  function toggleSortName() {
    setSortBy("name");
  }

  function toggleSortCategory() {
    setSortBy("category");
  }

  if (sort === "name") {
    itemArray = itemArray.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    itemArray = itemArray.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div>
        <label>Sort by: </label>
        <button
          className="bg-blue-300   text-white font-bold py-2 rounded p-3 hover:bg-indigo-500 items-center justify-center m-1 focus:bg-indigo-700"
          onClick={toggleSortName}
        >
          Name
        </button>
        <button
          className="bg-blue-300 text-white font-bold py-2 rounded p-3 hover:bg-indigo-500 items-center justify-center m-1 focus:bg-indigo-700"
          onClick={toggleSortCategory}
        >
          Category
        </button>
        <button className="bg-blue-300 text-white font-bold py-2 rounded p-3 hover:bg-indigo-500 items-center justify-center m-1 focus:bg-indigo-700">
          Grouped by Category
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((item) => (
            <Item itemObj={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
