import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(true);
  const [sending, setSending] = useState(false);
  
  

  const addTask = async (newTask) => {
    setSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    console.log(data);
    fetchTask();
    setSending(false);
  };

  const removeTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState }),
    });
    const data = await res.json();
    console.log(data);
    fetchTask();  
    
  };

  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
    setTaskLoading(false);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="p-10">
      <Heading />
      <CreateTask sending={sending} addTask={addTask} />
      <TaskList doneTask={doneTask} tasks={tasks} removeTask={removeTask}  />
      {taskLoading && <SkeletonLoader />}


    </div>
   
  );
};

export default App;
