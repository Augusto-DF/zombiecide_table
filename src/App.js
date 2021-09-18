import './App.css';
import React from 'react';
import HealthBar from './components/HealthBar';
import XpDisplay from './components/XpDisplay';

function App() {
  return (
    <div className="App">
      <HealthBar />
      <XpDisplay />
    </div>
  );
}

export default App;
