import './App.css';
import { useState } from 'react';


function App() {
  
  const [todoList,setTodoList] = useState([]) // pass empty array
  const [currentTask,setCurrentTask] = useState("")
  

  const addTask = () => {
    setTodoList([...todoList,currentTask]) //...todolist (What was on the list previously + new task)
    console.log(todoList)
  }

  return (
    <div className="App"><h1>TODO LIST</h1>
      <div>
        <input type="text" 
        placeholder="Task..." 
        onChange={(event)=>
          {setCurrentTask(event.target.value)}}> 
        </input>
        <button onClick={addTask}>Add task</button>
      </div>
      <hr></hr>

    </div>
    );
}

export default App;
