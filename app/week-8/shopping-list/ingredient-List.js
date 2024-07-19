"use client";

import { useEffect, useState } from "react";

export default function IngredientList({ mealId }) {
  const [ingredients, setIngredients] = useState([]);

  async function fetchIngredientList() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      const ingredientsList = [];
      const recipe = data.meals[0];
      for (const key in recipe) {
        if (key.startsWith("strIngredient") && recipe[key]) {
          ingredientsList.push(recipe[key]);
        }
      }
      setIngredients(ingredientsList);
    } catch (error) {
      console.log(`Error`);
    }
  }

  const loadIngredientList = () => fetchIngredientList(mealId);

  useEffect(() => {
    if (mealId) {
      loadIngredientList();
    }
  }, [mealId]);

  console.log(ingredients);

  return (
    <ul>
      <p>Ingredients needed: </p>
      {ingredients.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </ul>
  );
}
