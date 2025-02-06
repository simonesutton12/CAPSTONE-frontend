import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { planId } = useParams(); // Get planId from URL parameters
  const [plan, setPlan] = useState(null); // State to store plan data
  const [weight, setWeight] = useState(''); // State to store user weight
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Fetch plan data when component mounts or planId changes
  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await axios.get(`/api/plans/${planId}`);
        setPlan(response.data);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching the plan data.');
        setLoading(false);
      }
    };

    fetchPlan();
  }, [planId]);

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
}

export default UserProfile;