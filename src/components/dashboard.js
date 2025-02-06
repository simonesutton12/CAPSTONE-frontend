import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await axios.get('/api/custom-meal-plans', {
          headers: {
            'Custom-Header': 'value'
          }
        });
        setMealPlans(response.data);
      } catch (error) {
        console.error('Error fetching custom meal plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealPlans();
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Custom Meal Plans</h1>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="meal-plans-list">
          {mealPlans.map(plan => (
            <li key={plan.id} className="meal-plan-item">
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
