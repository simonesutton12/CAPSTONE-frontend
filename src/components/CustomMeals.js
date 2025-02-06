import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomMeals.css';
import dotenv from 'dotenv';
import { Link } from 'react-router-dom';



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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomMeals;

