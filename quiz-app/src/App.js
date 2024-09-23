import './App.css';
import Menu from './components/Menu'
import { useState } from 'react';

import { GameStateContext } from './helpers/Contexts';


//['menu','playing','finished']
function App() {

  const [gameState, setGameState] = useState("menu"); //will represent the state we are in the game



  //GameStateContext helps to see the state where we are in the game
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState,setGameState}}> 
        {gameState === "menu" && <Menu />}
      </GameStateContext.Provider>

    </div>
  );
}

export default App;
