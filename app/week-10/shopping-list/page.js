"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItemPage from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItemsList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    addItem(user.uid, newItem);
    setItemsList([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name;
    setSelectedItemName(cleanedName);
    console.log(selectedItemName);
  };

  async function loadItems() {
    if (user) {
      getItems(user.uid, setItemsList);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

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
