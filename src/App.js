import Header from './ components/Header';
import Tasks from './ components/Tasks';
import AddTask from './ components/AddTask';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Delete a task
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }

  // Add a task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowForm(!showForm)} formShown={showForm}/>
      {showForm && <AddTask onAdd={addTask}/> }
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> : "No Tasks to Show"
      }
    </div>
  );
}

export default App;
