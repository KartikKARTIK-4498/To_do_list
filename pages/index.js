import { useState, useEffect } from 'react';
import mongoose from 'mongoose';

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Apprendre Next.js", completed: false },
    { id: 2, text: "Créer une application de liste de tâches", completed: false },
    { id: 3, text: "Explorer Vercel pour le déploiement", completed: false }
  ]);
  const [newTaskText, setNewTaskText] = useState(""); 
  const [editingTaskId, setEditingTaskId] = useState(null); 

  useEffect(() => {
    // Connect to MongoDB when the component mounts
    try {
      mongoose.connect('mongodb+srv://kartik_kartik:GANESHji13@cluster0.ajxhprw.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }

    // Clean up function to close the MongoDB connection when the component unmounts
    return () => {
      mongoose.connection.close();
      console.log('Disconnected from MongoDB');
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const toggleCompletion = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
    }
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const startEditing = (id) => {
    setEditingTaskId(id);
  };

  const updateTask = (id, newText) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h1>Ma Liste de Tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => updateTask(task.id, e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? 'Marquer comme non complétée' : 'Marquer comme complétée'}
            </button>
            <button onClick={() => startEditing(task.id)}>Modifier</button>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
}
