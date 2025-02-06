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

  useEffect(() => {
    console.log('planId:', planId);
    console.log('mealPlan:', mealPlan);

    if (!plan) {
      const fetchPlan = async () => {
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer cac2854bf30643a9bffd81eebcf0a1b8`
            }
          });
          console.log('API response:', response.data);
          setPlan(response.data);
        } catch (error) {
          console.error('Error fetching plan details:', error);
          setError('Failed to fetch plan details. Please try again later.');
        }
      };

      fetchPlan();
    }
  }, [planId, plan, mealPlan]);

  useEffect(() => {
    console.log('Current plan state:', plan);
  }, [plan]);

  return (
    <div className="UserProfile">
      {error && <p className="error">{error}</p>}
      {plan ? (
        <div>
          <h2>{plan.title}</h2>
          <p>Ready in {plan.readyInMinutes} minutes</p>
          <p>Servings: {plan.servings}</p>
          {plan.nutrition && <p>Calories: {plan.nutrition.calories}</p>}
          <img src={plan.image} alt={plan.title} />
          <p>{plan.summary}</p>
          <p>User Weight: {weight} lbs</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
