import React from 'react'
import Board from './components/Board';
import './App.css'


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>X Mix Drix</h1>
      <Board />
    </div>
  );
};

export default App;
