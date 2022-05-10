import Header from './ components/Header';
import Tasks from './ components/Tasks';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  // Delete a task
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> : "No Tasks to Show"
      }
    </div>
  );
}

export default App;
