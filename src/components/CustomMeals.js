<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomMeals.css';

const CustomMeals = () => {
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    axios.get('/api/meals')
      .then(response => setMealPlans(response.data))
      .catch(error => console.error('Error fetching meal plans:', error));
  }, []);

  return (
    <div className="custom-meals">
      <h2>Custom Meal Plans</h2>
      <ul>
        {mealPlans.map(meal => (
          <li key={meal._id}>
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
            <p>Calories: {meal.calories}</p>
>>>>>>> ca8999262f6db943eaff7b8c7281f7adca1c8958
          </li>
        ))}
      </ul>
    </div>
  );
<<<<<<< HEAD
}

export default CustomMeals;
=======
};

export default CustomMeals;

>>>>>>> ca8999262f6db943eaff7b8c7281f7adca1c8958
