import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '../components/dashboard';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data') // Replace '/api/data' with your actual API endpoint
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to the Nutrition Decision</h2>
      <p>Track your food and plan your meals.</p>
      <Dashboard />
      <div>
        <h3>Data from API:</h3>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li> // Adjust the key and displayed data as per your API response
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;