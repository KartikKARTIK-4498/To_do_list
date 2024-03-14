// pages/index.js

import { useState, useEffect } from 'react';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data.tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks && tasks.map(task => (
          <li key={task._id}>{task.text}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter task"
      />
      <button>Add Task</button>
    </div>
  );
}

export default Home;
