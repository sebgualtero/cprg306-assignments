"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [mealIdeas, setMealIdeas] = useState([]);

  async function fetchMealIdeas() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMealIdeas(data.meals);
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
              className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800"
              key={meal.idMeal}
            >
              <a href={`https://www.themealdb.com/meal/${meal.idMeal}`}>
                {meal.strMeal}
              </a>
            </li>
          ))
        ) : (
          <li>No meal ideas found for {ingredient}</li>
        )}
      </ul>
    </div>
  );
}
