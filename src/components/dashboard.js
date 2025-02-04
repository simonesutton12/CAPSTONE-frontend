import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Here you can see an overview of your nutrition data.</p>
      {data ? (
        <div>
          <p>Your current meal plan: {data.mealPlan}</p>
          <p>Your current weight: {data.weight}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;

import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './dashboard';

jest.mock('axios');

test('renders loading state initially', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('renders data after fetching', async () => {
  const mockData = {
    mealPlan: 'Weight Loss Plan',
    weight: '70kg',
  };

  axios.get.mockResolvedValueOnce({ data: mockData });

  render(<Dashboard />);

  await waitFor(() => {
    expect(screen.getByText(/Your current meal plan: Weight Loss Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Your current weight: 70kg/i)).toBeInTheDocument();
  });
});
