import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    axios.get('/api/user')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));

    axios.get('/api/meals')
      .then(response => setMealPlans(response.data))
      .catch(error => console.error('Error fetching meal plans:', error));
  }, []);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Current Weight: {user.weight} lbs</p>
      <h2>Personal Meal Plans</h2>
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

export default UserProfile;
