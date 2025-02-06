import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Homepage.css'; // Ensure this file exists

function Homepage() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle button click
  const handleClick = () => {
    navigate('/personal-plans'); // Navigate to the meal plans page
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to Nutrition Decision</h1>
      <p>Your journey to a healthier lifestyle starts here.</p>
      <button onClick={handleClick}>Get Started</button>
    </div>
  );
}

export default Homepage;
