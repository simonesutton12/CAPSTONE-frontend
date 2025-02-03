import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import NutritionGoals from './pages/nutritiongoals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nutrition Decision</h1>
        <button>Welcome</button>  
      </header>
      <Router>
          <Routes>
      
          <Route path="/" component={Homepage} />
          <Route path="/nutritiongoals" component={NutritionGoals} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;


