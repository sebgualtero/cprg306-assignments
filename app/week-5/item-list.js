"use client";

import Item from "./item.js";
import { useState } from "react";
import itemData from "./items.json";

export default function ItemList() {
  let itemArray = itemData.map((item) => ({ ...item }));

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
          {itemArray.map((item, index) => (
            <Item key={index} itemObj={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
