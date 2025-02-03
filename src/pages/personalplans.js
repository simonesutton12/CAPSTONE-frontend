import React, { useEffect } from 'react';


function PersonalPlans() {
    useEffect(() => {   
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log('API key:', apiKey);
    }, []);
    
    return (
        <div>
            <h2>Personal Plans</h2>
            <p>Here you can manage your personal nutrition plans.</p>
        </div>
    );
}

export default PersonalPlans;
