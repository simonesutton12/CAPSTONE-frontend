import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NutritionGoals from './pages/nutritiongoals';
import PersonalPlans from './pages/personalplans';
import UserProfile from './components/UserProfile';
import CustomMeals from './components/CustomMeals';
import About from './pages/about';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Nutrition Decision</h1>
          {/* Navigation links to different pages */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/personal-plans">Personal Plans</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
        </header>
        {/* Define routes for different components */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/custom-meals" element={<CustomMeals />} />
          <Route path="/personal-plans" element={<PersonalPlans />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-profile/:planId" element={<UserProfile />} />
          <Route path="*" element={<h1>Custom Meal Plans</h1>} />
          <Route path="/profile" element={<CustomMeals />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;



