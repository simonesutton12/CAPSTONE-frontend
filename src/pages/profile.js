import React, { useEffect, useState } from 'react';
const axios = require('axios');

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API key:', apiKey);

        const fetchUser = async () => {
            try {
                const response = await axios.get('https://api.example.com/user', {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Weight: {user.weight}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
