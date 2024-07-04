"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ itemsList, onItemSelect }) {
  let [sort, setSortBy] = useState("name");

  function toggleSortName() {
    setSortBy("name");
  }

  function toggleSortCategory() {
    setSortBy("category");
  }

  let sortedItems = [...itemsList];
  if (sort === "name") {
    sortedItems = sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortedItems = sortedItems.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  }

  return (
    <div className="bg-slate-800 m-5 w-96 p-2">
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
      </div>
      <div>
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.name} itemObj={item} onSelect={onItemSelect} />
          ))}
        </ul>
      </div>
    </div>
  );
}
