import React, { useEffect, useState } from 'react';
const axios = require('axios');

function Profile(){
    const [user, setUser] = useState(null);

   useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log('API KEY:', apiKey);

    const fetchUser = async () => {
        try {
            const response = await axios.get('https://api.example.com/user',{ 
                headers:{
                    'Authorization': 
                }
            })
        }
    }   }
}
