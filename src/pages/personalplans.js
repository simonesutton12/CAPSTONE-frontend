import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/PersonalPlans.css';

function PersonalPlans() {
  const [data, setData] = useState([]);
  const [weight, setWeight] = useState('');
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weightError, setWeightError] = useState('');
  const navigate = useNavigate();

  const fetchData = async (userWeight) => {
    if (!userWeight || userWeight <= 0) {
      setWeightError('Please enter a valid weight.');
      return;
    }

    setWeightError('');
    const apiKey = 'cac2854bf30643a9bffd81eebcf0a1b8'; // API key
    try {
      setLoading(true);
      const response = await axios.get('https://api.spoonacular.com/mealplanner/generate', {
        headers: { 'Content-Type': 'application/json' },
        params: {
          apiKey: apiKey,
          targetCalories: userWeight * 10, // Simple calculation for calories
          timeFrame: 'day',
        },
      });
      setData(response.data.meals); // Update state with fetched data
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlan = (plan) => {
    setSelectedPlans((prevPlans) => [...prevPlans, plan]);
  };

  const handleRemovePlan = (planId) => {
    setSelectedPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== planId));
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
      {weightError && <p className="error">{weightError}</p>}
      <button
        onClick={() => fetchData(weight)}
        disabled={!weight || weight <= 0}
      >
        Fetch Meal Plans
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="meal-plans">
        {data.map((plan) => (
          <div key={plan.id} className="meal-plan">
            <h3>{plan.title}</h3>
            <p>Calories: {plan.nutrition?.calories || 'N/A'}</p>
            <button onClick={() => handleAddPlan(plan)}>Add Plan</button>
          </div>
        ))}
      </div>

      <div className="selected-plans">
        <h3>Selected Plans</h3>
        {selectedPlans.map((plan) => (
          <div key={plan.id} className="selected-plan">
            <h4>{plan.title}</h4>
            <p>Calories: {plan.nutrition?.calories || 'N/A'}</p>
            <button onClick={() => handleRemovePlan(plan.id)}>Remove Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalPlans;

