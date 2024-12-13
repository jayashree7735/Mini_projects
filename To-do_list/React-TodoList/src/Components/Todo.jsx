import React, { useState, useRef } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  // Function to add a task
  const addTask = () => {
    const taskValue = inputRef.current.value.trim();
    if (taskValue) {
      setTasks([...tasks, { text: taskValue, completed: false }]);
      inputRef.current.value = ""; // Clear input field
    }
    inputRef.current.focus(); // Automatically focus the input
  };

  // Function to toggle task completion
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          style={{ padding: "10px", width: "70%", marginRight: "5px" }}
        />
        <button onClick={addTask} style={{ padding: "10px" }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => toggleTask(index)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
