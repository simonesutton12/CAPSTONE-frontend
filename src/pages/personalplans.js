import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PersonalPlans.css';

function PersonalPlans() {
  const [data, setData] = useState([]);
  const [weight, setWeight] = useState('');
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (userWeight) => {
    const apiKey = 'cac2854bf30643a9bffd81eebcf0a1b8'; // Use the provided API key
    try {
      setLoading(true);
      const response = await axios.get('https://api.spoonacular.com/mealplanner/generate', {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          apiKey: apiKey,
          targetCalories: userWeight * 10, // Example calculation for target calories
          timeFrame: 'day'
        }
      });
      setData(response.data.meals); // Update state with fetched data
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); // Set error message from response
      } else {
        setError('An error occurred while fetching data.'); // Set generic error message
      }
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const handleAddPlan = (plan) => {
    setSelectedPlans([...selectedPlans, plan]);
  };

  const handleRemovePlan = (planId) => {
    setSelectedPlans(selectedPlans.filter(plan => plan.id !== planId));
  };

  return (
    <div className="personal-plans">
      <h2>Personal Plans</h2>
      <p>Here you can manage your personal nutrition plans.</p>
      <input
        type="number"
        placeholder="Enter your weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={() => fetchData(weight)}>Fetch Meal Plans</button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="meal-plans">
        {data.map(plan => (
          <div key={plan.id} className="meal-plan">
            <h3>{plan.title}</h3>
            <p>Calories: {plan.nutrition?.calories}</p>
            <button onClick={() => handleAddPlan(plan)}>Add Plan</button>
          </div>
        ))}
      </div>
      <div className="selected-plans">
        <h3>Selected Plans</h3>
        {selectedPlans.map(plan => (
          <div key={plan.id} className="selected-plan">
            <h4>{plan.title}</h4>
            <p>Calories: {plan.nutrition?.calories}</p>
            <button onClick={() => handleRemovePlan(plan.id)}>Remove Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalPlans;
