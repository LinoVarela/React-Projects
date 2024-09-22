import './App.css';
import { useState, useRef } from 'react';


function App() {

  const [todoList, setTodoList] = useState([]) // pass empty array
  const [currentTask, setCurrentTask] = useState("")

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]) //...todolist (What was on the list previously + new task), task e completed -> objeto com 2 propriadades (task e estado)
    inputTask.current.value = "";
    setCurrentTask("")
    console.log(todoList)
  };


  function deleteTask(taskToDelete) {
    setTodoList(todoList.filter((task) => {
      return task.task !== taskToDelete;
    }))
  };

  function completeTask(taskToComplete) {
    setTodoList(
      todoList.map((task) => {
      //if task is the taskto completed, make it true or else
      return task.task == taskToComplete
        ? { task: taskToComplete, completed: true }
        : { task: task.task, completed: task.completed ? true : false }; //if task was previously keep it true, if not false 
    }))
  };



  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input
          ref={inputTask}
          type="text"
          onKeyDown={(event)=> 
            {if (event.keyCode == 13) addTask()}} //detect if a key is pressed , 13 is the enter key
          placeholder="Task..."
          onChange={(event) => { setCurrentTask(event.target.value) }}>
        </input>
        <button onClick={addTask}>Add task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {  //map looops through list/array
          return (
            <div id="task">
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>Completed</button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              {val.completed ? (
                <h1>Task Completed</h1>
              ) : (
                <h1>Task not completed</h1>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
