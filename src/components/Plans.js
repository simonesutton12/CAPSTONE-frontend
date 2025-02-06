import React, { useEffect, useState } from 'react';


function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/plans')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div>
      <h2>Plans</h2>
      <ul>
        {plans.map(plan => (
          <li key={plan._id}>{plan.name} - {plan.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Plans;