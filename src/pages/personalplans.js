import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PersonalPlans.css';

function PersonalPlans() {
  const [data, setData] = useState(null);
  const [weight, setWeight] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (userWeight) => {
    const apiKey = 'cac2854bf30643a9bffd81eebcf0a1b8'; // Use the provided API key

    try {
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
      setData(response.data.meals);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData(weight);
  };

  const handleAddToProfile = () => {
    const selectedMealPlan = data.find(plan => plan.id === parseInt(selectedPlan));
    navigate({
      pathname: `/user-profile/${selectedPlan}`,
      state: { weight, mealPlan: selectedMealPlan }
    });
  };

  return (
    <div className="personal-plans">
      <header className="personal-plans-header">
        <h1>Personal Meal Plans</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your weight (lbs):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
          <button type="submit">Get Meal Plans</button>
        </form>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <div>
            <label>
              Select a meal plan:
              <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                <option value="">Select a plan</option>
                {data.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.title}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={handleAddToProfile} disabled={!selectedPlan}>
              Add to Profile
            </button>
          </div>
        )
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default PersonalPlans;
