import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { planId } = useParams();
  const location = useLocation();
  const { weight, mealPlan } = location.state || {};
  const [plan, setPlan] = useState(mealPlan || null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(!mealPlan);

  useEffect(() => {
    console.log('planId:', planId);
    console.log('mealPlan:', mealPlan);

    if (!plan) {
      const fetchPlan = async () => {
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/${planId}`);
          setPlan(response.data);
          setLoading(false);
        } catch (error) {
          setError('An error occurred while fetching the plan data.');
          setLoading(false);
        }
      };

      fetchPlan();
    }
  }, [planId, mealPlan, plan]);

  return (
    <div className="user-profile">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        plan && (
          <div>
            <h2>{plan.title}</h2>
            <p>Ready in {plan.readyInMinutes} minutes</p>
            <p>Servings: {plan.servings}</p>
            <p>Calories: {plan.nutrition?.calories}</p>
            {plan.image && <img src={plan.image} alt={plan.title || 'Plan Image'} />}
            <p>{plan.summary}</p>
            <p>User Weight: {weight} lbs</p>
          </div>
        )
      )}
    </div>
  );
};

export default UserProfile;
