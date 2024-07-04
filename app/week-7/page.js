"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItemPage from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItemsList] = useState(itemData.map((item) => ({ ...item })));
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => setItemsList([...items, newItem]);

  const handleItemSelect = (item) => {
    let cleanedName = item.name.replace(",", " ");
    cleanedName = cleanedName.substring(0, item.name.indexOf(" "));
    setSelectedItemName(cleanedName);
  };

  console.log(items);
  return (
    <main className="bg-slate-1000 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItemPage onAddItem={handleAddItem} />
          <ItemList itemsList={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
