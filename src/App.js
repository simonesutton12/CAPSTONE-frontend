import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Homepage';
import PersonalPlans from './pages/personalplans';
import About from './pages/about';
import UserProfile from './components/UserProfile';
import CustomMeals from './components/CustomMeals'





function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">home</Link></li>
                
                        <li><Link to="/personal-plans">Personal Plans</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        <li><Link to= "/user-profile/">Profile</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/custom-meals" element={<CustomMeals />} />
                    <Route path="/personal-plans" element={<PersonalPlans />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user-profile/:planId" component={<UserProfile />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;


