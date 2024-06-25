"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItemPage from "./new-item";
import itemData from "./items.json";

export default function Page() {
  const [items, setItemsList] = useState(itemData.map((item) => ({ ...item })));

  const handleAddItem = (newItem) => setItemsList([...items, newItem]);

  console.log(items);
  return (
    <main className="bg-slate-900 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItemPage onAddItem={handleAddItem} />
      <ItemList itemsList={items} />
    </main>
  );
}
