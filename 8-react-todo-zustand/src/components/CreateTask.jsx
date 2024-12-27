import React, { useState } from 'react'
import useTaskStore from '../store/useTaskStore';

const CreateTask = () => {
  const [job, setJob] = useState('');
  const handleOnChange = (event) => {
    setJob(event.target.value);
  }
const {addTask} = useTaskStore();
  const handleAddtaskbtn = () => {
    const newTask = { id: Date.now(), task: job, isDone: false };
    addTask(newTask);
    setJob('');
  }
  return (
    <div className='flex mb-3'>
      <input type="text" className='flex-grow border border-slate-400 rounded-l-md py-2 px-4'
      value={job} 
      onChange={handleOnChange}
      placeholder='Enter a task here' />
      <button onClick={handleAddtaskbtn} className='border border-slate-400 py-2 px-4 rounded-r-md text-sm bg-slate-200'>Add Task</button>
    </div>
  )
}

export default CreateTask;