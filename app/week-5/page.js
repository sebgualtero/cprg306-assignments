import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-900 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
