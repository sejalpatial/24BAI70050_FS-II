import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {

    if (task === "") {
      alert("Please enter a task");
      return;
    }

    setTodoList([...todoList, task]);
    setTask("");
  };

  const deleteTask = (index) => {

    const newList = todoList.filter((item, i) => i !== index);
    setTodoList(newList);

  };

  return (
    <div className="container">

      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>

        {todoList.map((item, index) => (

          <li key={index}>

            {item}

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;