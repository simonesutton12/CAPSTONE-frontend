import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import PersonalPlans from './pages/personalplans';
import About from './pages/about';
import Profile from './pages/profile';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/personal-plans">Personal Plans</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/profile">Profile</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personal-plans" element={<PersonalPlans />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


