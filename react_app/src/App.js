import React, {useState} from 'react';
import './App.css';

function App() {
  //const name = "Lino"

  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [height,setHeight] = useState(0)
  const [SuperPower,setSuperPower] = useState("")
  const [displayChar,setDisplayChar] = useState(false)

  const changeName = () => {
    setName("Linox"); //States, change variables
  }; 

  // function changeName(){ } works as well

  return <div className="App">
    <h1>Build a Hero</h1>

  <div>

      <label>Name:</label>
      <input type ="text" style={{margin: 10 }} onChange={(event)=>{setName(event.target.value)}}/>
      <label>Age:</label>
      <input type ="number" style={{margin: 10 }} onChange={(event)=>{setAge(event.target.value)}}></input>
      <label>Height:</label>
      <input type ="text" style={{margin: 10 }} onChange={(event)=>{setHeight(event.target.value)}}/>
      <label>SuperPower:</label>  
      <input type ="text" style={{margin: 10 }} onChange={(event)=>{setSuperPower(event.target.value)}}/>
  </div>
  <button 
  onClick={() => {
    setDisplayChar(true)}}>
      Display Character
    </button>
  <div>
    <h1>Hero Info</h1>
    {displayChar && 
    (<ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{height}</li>
      <li>{SuperPower}</li>
    </ul>
  )}
  </div>

  </div>;
}

export default App;
