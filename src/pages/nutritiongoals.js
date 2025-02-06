import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

function NutritionGoals() {
  const [goals, setGoals] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nutrition Goals:', goals);
    
   fetch('/api/nutritiongoals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goals }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate('/');  
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>What are your nutrition goals?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your goals:
          <input
            type="text"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NutritionGoals;