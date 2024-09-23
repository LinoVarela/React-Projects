import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/Contexts';

function Menu() {

    const { GameState, setGameState , userName, setUserName} = useContext(GameStateContext);
    


    return (
        <div className="Menu">
            <label>Enter your Name:</label>
            <input type="text" placeholder="Ex: Lino" onChange={(event)=>setUserName(event.target.value)}></input>
            <button onClick={() => { setGameState('playing') }}>Start Quiz</button> 


        </div>
    );
}


export default Menu;    