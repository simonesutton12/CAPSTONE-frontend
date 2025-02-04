import React, { useEffect, useState } from 'react';
const axios = require('axios');

function PersonalPlans() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API key:', apiKey);

        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data', {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Personal Plans</h2>
            <p>Here you can manage your personal nutrition plans.</p>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default PersonalPlans;
