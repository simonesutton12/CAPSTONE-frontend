import React from 'react';

function Dashboard() {
  console.log('Dashboard component rendered');
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Here you can see an overview of your nutrition data.</p>
      <p>Your current meal plan</p>
      <p>Your current weight</p>    
    </div>
  );
}

export default Dashboard;