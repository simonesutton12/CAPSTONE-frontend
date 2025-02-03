import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NutritionGoals from './pages/nutritiongoals';
import PersonalPlans from './pages/personalplans';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Nutrition Decision</h1>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nutritiongoals" element={<NutritionGoals />} />
          <Route path="/personalplans" element={<PersonalPlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


