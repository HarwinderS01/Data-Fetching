import React, { useState, useEffect } from "react";

const TodoForm = ({ onAddTask }) => {
  const [tasks, setTasks] = useState([]); // State to store fetched tasks
  const [randomTask, setRandomTask] = useState(""); // State for the selected task

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/tasks.json`)
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
  

  // Handle generating a random task
  const handleGenerateTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setRandomTask(tasks[randomIndex]);
    }
  };

  // Handle adding the selected task
  const handleAddTask = () => {
    if (randomTask.trim() !== "") {
      onAddTask(randomTask);
      setRandomTask(""); // Clear the input field
    }
  };

  return (
    <div>
      <button onClick={handleGenerateTask}>Generate Random Task</button>
      <input
        type="text"
        value={randomTask}
        readOnly
        placeholder="Generated task will appear here"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;
