// Import React and necessary hooks
'use strict';
'use client';
import React, { useState, useEffect } from 'react';

// Define the MealIdeas component
function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if ingredient is not null before making the API call
        if (ingredient) {
          const formattedIngredient = ingredient.toLowerCase();
          const mealResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${formattedIngredient}`
          );
          const mealData = await mealResponse.json();

          if (mealData.meals !== null && mealData.meals.length > 0) {
            const mealPromises = mealData.meals.map(async (meal) => {
              const ingredientResponse = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
              );
              const ingredientData = await ingredientResponse.json();
              const mealWithIngredients = {
                ...meal,
                ingredients: getIngredientsList(ingredientData),
              };
              return mealWithIngredients;
            });

            const mealsWithIngredients = await Promise.all(mealPromises);
            setMeals(mealsWithIngredients);
          } else {
            setMeals([]);
            console.warn('No meals found for ingredient:', formattedIngredient);
          }
        }
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
        setMeals([]);
        setError('Error fetching meal ideas. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    const getIngredientsList = (ingredientData) => {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = ingredientData.meals[0][`strIngredient${i}`];
        const measure = ingredientData.meals[0][`strMeasure${i}`];
        if (ingredient && measure) {
          ingredients.push(`${measure} ${ingredient}`);
        }
      }
      return ingredients;
    };

    fetchMealIdeas();
  }, [ingredient]);

  const handleMealClick = (meal) => {
    setSelectedMeal(selectedMeal === meal ? null : meal);
  };

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>
        Meal Ideas
      </h2>
      <h4 style={{ color: 'white', marginBottom: '10px' }}>
        {ingredient ? `Here are some meal ideas for: ${ingredient}` : 'Select an item to see meal ideas'}
      </h4>

      {loading && <p style={{ color: 'white' }}>Loading meal ideas...</p>}
      {error && <p style={{ color: 'red', fontWeight: 'bolder' }}>{error}</p>}

      {meals.length === 0 && !loading && !error && ingredient && (
        <p style={{ color: 'white' }}>No meal ideas found for {ingredient}.</p>
      )}

      {meals.length > 0 && (
        <ul style={{ color: 'white', listStyleType: 'none', paddingLeft: '0' }}>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              style={{
                border: '1px solid #0f4c81',
                backgroundColor: '#e2eaeb',
                padding: '10px',
                marginTop: '10px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                MozUserSelect: 'none',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                width: '50%',
                cursor: 'pointer',
              }}
              onClick={() => handleMealClick(meal)}
            >
              <div
                className="title"
                style={{
                  color: 'black',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                }}
              >
                {meal.strMeal}
              </div>
              <div
                className='description'
                style={{
                  color: 'black',
                  fontSize: '15px',
                }}
              >
                <strong style={{
                  textDecoration: 'underline',
                }}>Ingredients:</strong>
              </div>
              {selectedMeal === meal && (
                <ul style={{ marginTop: '5px', listStyleType: 'disc', paddingLeft: '20px', color: 'black' }}>
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MealIdeas;
