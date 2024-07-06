"use client";

import { useEffect, useState } from "react";
import IngredientList from "./ingredient-List";

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealSelect = (meal) => {
    let cleanedName = meal.idMeal;
    setSelectedMeal(cleanedName);
  };

  async function fetchMealIdeas() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMealIdeas(data.meals);
      setSelectedMeal(null);
    } catch (error) {
      console.log(`Error: $ ${error.message}`);
    }
  }

  const loadMealIdeas = () => fetchMealIdeas(ingredient);

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      {mealIdeas && <p>Here are some meal ideas for {ingredient}:</p>}

      <ul>
        {mealIdeas ? (
          mealIdeas.map((meal) => (
            <li
              className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
              key={meal.idMeal}
              onClick={() => handleMealSelect(meal)}
            >
              {meal.strMeal}
              {selectedMeal == meal.idMeal ? (
                <div className="text-xs text-gray-400 ml-2">
                  <IngredientList mealId={selectedMeal} />
                </div>
              ) : (
                <p></p>
              )}
            </li>
          ))
        ) : (
          <li>No meal ideas found for {ingredient}</li>
        )}
      </ul>
    </div>
  );
}
