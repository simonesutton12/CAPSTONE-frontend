import React, { useEffect, useState } from 'react';

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('/api/meals')
      .then(response => response.json())
      .then(data => setMeals(data));
  }, []);

  return (
    <div>
      <h2>Meals</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal._id}>{meal.name} - {meal.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Meals;