import React, { useState } from "react";
import "./letsdo.css";

function Letsdo() {

  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  

  const addTask = () => {
    if (!taskText.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, done: false },
    ]);
    setTaskText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div className="container">
      <h1> My Tasks</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Add a new task…"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.done ? "done" : ""}`}
          >
            <div className="task-info">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(task.id)}
              />
              <span>{task.text}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Letsdo;
