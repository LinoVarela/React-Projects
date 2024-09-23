import './App.css';
import Menu from './components/Menu'
import { useState } from 'react';




//['menu','playing','finished']
function App() {

  const [gameState,setGameState] = useState(""); //will represent the state we are in the game

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Menu></Menu>
    </div>
  );
} 

export default App;
