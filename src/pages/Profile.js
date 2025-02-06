import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Rename the function to avoid conflict with the imported Profile component
function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API key:', apiKey);

        const fetchUser = async () => {
            try {
                const response = await axios.get('https://api.example.com/profile', {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                });
                console.log('API response:', response); // Add this line
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

export default ProfilePage;
