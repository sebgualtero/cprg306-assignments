"use client";

import { useState } from "react";

export default function NewItemPage() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemData = {
      itemName: name,
      itemQuantity: quantity,
      itemCategory: category,
    };
    console.log(itemData);

    alert(
      `Added item: ${itemData.itemName}, quantity: ${itemData.itemQuantity}, category: ${itemData.itemCategory}`
    );

    setName("");
    setQuantity(0);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <div className="bg-blackPearl flex-col justify-center items-center m-5 w-96 ">
        <form className="p-5 w-60" onSubmit={handleSubmit}>
          <input
            type="text"
            id="item_name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Item Name"
            required
          />
          <div className="flex-row justify-around">
            <input
              className="bg-blackPearl text-white"
              type="number"
              id="item_quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
              max={99}
            />
            <select
              id="item_category"
              name="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverage">Beverage</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full"
          >
            Add Item
          </button>
        </form>
      </div>
    </main>
  );
}
