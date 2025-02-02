import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nutrition Decision</h1>
        <button>Welcome</button>  
      </header>
      <Homepage />
    </div>
  );
}

export default App;
