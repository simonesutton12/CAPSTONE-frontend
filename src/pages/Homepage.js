import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '../components/dashboard';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
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

const axiosConfig = {
    headers: {
      'Authorization': 'Bearer your_token_here',
      // Include other necessary headers but keep them as minimal as possible
    }
  };
  
  axios.get('/your-endpoint', axiosConfig)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
  