"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItemPage from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItemsList] = useState(itemData.map((item) => ({ ...item })));
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => setItemsList([...items, newItem]);

  const handleItemSelect = (item) => {
    let cleanedName = item.name.replace(",", " ");
    cleanedName = cleanedName.substring(0, item.name.indexOf(" "));
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-1000 p-4">
      {user ? (
        <div>
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
        </div>
      ) : (
        <div>
          <p>You are not authenticated</p>

          <Link href="../">Go to login page</Link>
        </div>
      )}
    </main>
  );
}
