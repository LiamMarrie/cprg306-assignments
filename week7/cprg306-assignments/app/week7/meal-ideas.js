// Import React and necessary hooks
'use strict';
'use client';
import React, { useState, useEffect } from 'react';

// Define the MealIdeas component
function MealIdeas({ ingredient }) {
  // Define state variables
  const [meals, setMeals] = useState([]);

  // Define the fetchMealIdeas function
  async function fetchMealIdeas(ingredient) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.meals) {
        return data.meals;
      } else {
        console.error('Error fetching meal ideas:', data.message);
        return [];
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  }

  // Define the loadMealIdeas function
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use the useEffect hook to call loadMealIdeas when the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the component
  return (
    <div style={{

    }}>
      <h2 style={{
        color: 'white'
      }}>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
