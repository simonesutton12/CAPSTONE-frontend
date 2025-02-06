import React, { useState } from 'react';

function CustomMeals() {
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);

  const handleAddMeal = () => {
    const newMeal = { mealName, calories };
    setMeals([...meals, newMeal]);
    setMealName('');
    setCalories('');
  };

  return (
    <div>
      <h2>Add Custom Meals</h2>
      <input
        type="text"
        placeholder="Meal Name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button onClick={handleAddMeal}>Add Meal</button>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal.mealName} - {meal.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomMeals;
