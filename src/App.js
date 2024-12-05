import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './styles.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
