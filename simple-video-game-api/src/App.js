import './App.css';
import { useState, useEffect } from 'react';
import useSwr from 'swr'

const fetcher = (...args) => fetch(...args).then((response) => response.json())

function App() {


  const [gameTitle, setGameTitle] = useState('')
  const [searchedGames, setSearchGames] = useState([])
  const [gameDeals, setGameDeals] = useState([])



  const {data,error} = useSwr("https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3",fetcher) 

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setSearchGames(data)
      })

  }

  useEffect(() => { //use effect is a hook that allows a component to do a certain action after rendering
    fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`) //ID=1 -> steam
      .then((response) => response.json())
      .then((data) => {
        setGameDeals(data)
        console.log(data)
      });
  }, []);


  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search For A Game</h1>
        <input
          type="text"
          placeholder='Minecraft...'
          onChange={(event) => { setGameTitle(event.target.value) }}>
        </input>

        <button onClick={searchGame}>Search Game</button>

        <div className='games'>
          {searchedGames.map((game, key) => {
            return (
              <div className='game' key={key}>
                {game.external}
                <img src={game.thumb} alt={game.external}></img>
                {game.cheapest + "$"}
              </div>
            );
          })}
        </div>


      </div>


      <div className="dealsSection">
        <h1>Latest Deals</h1>
        <div className='games'>
          {gameDeals.map((game, key) => {
            return (
              <div className='game' id='deals' key={key}>
                <h3>{game.title}</h3>
                <p>Normal Price: {game.salePrice}$</p>
                <p>Deal Price: {game.normalPrice}$</p>
                <h3>You save {game.savings.substr(0,2)}%</h3>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
