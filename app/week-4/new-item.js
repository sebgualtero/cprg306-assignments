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
    <div className="bg-slate-800  items-center m-5 w-96 p-2">
      <div className="flex-col w-full gap-2">
        <form className="" onSubmit={handleSubmit}>
          <div>
            <input
              className="text-sky-950 w-full p-2 border-2 border-gray-600  border-solid rounded-md"
              type="text"
              id="item_name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Item Name"
              required
            />
          </div>
          <div className="flex flex-row justify-between pt-2">
            <div>
              <input
                className="text-sky-950 border-2 border-gray-600  border-solid rounded-md basis-1/2 p-2"
                type="number"
                id="item_quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
                max={99}
              />
            </div>
            <div>
              <select
                className="text-sky-950 basis-1/2 p-2 border-2 border-gray-600  border-solid rounded-md"
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
          </div>
          <div class="pt-2">
            <button
              className="bg-blue-500 text-white font-bold w-full  py-2 rounded hover:bg-indigo-500 items-center justify-center m-1"
              type="submit"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
