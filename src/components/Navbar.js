import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nutritiongoals">Nutrition Goals</Link></li>
        <li><Link to="/personalplans">Personal Plans</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;