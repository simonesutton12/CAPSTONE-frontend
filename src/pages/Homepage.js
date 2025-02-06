import React from 'react';
import Dashboard from '../components/dashboard';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Nutrition Decision</h1>
        <p>Your journey to a healthier lifestyle starts here.</p>
      </header>
      <Dashboard />
    </div>
  );
};

export default Homepage;


