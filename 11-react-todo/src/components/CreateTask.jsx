import React, { useState } from 'react';
import { ring2 } from 'ldrs';

const CreateTask = ({addTask,sending}) => {
  const [job, setJob] = useState('');

  ring2.register();
  const handleOnChange = (event) => {
    setJob(event.target.value);
  }

  const handleAddtaskbtn = () => {
    if(job.trim()){
      const newTask = { task: job, isDone: false };
    addTask(newTask);
    setJob('');
    }else{
      alert("Please enter a task!");
    }
  }
  return (
    <div className='flex mb-3'>
      <input type="text" className='flex-grow border border-slate-400 rounded-l-md py-2 px-4 disabled:opacity-50'
      value={job} 
      onChange={handleOnChange}
      placeholder='Enter a task here'
      disabled={sending} />
      <button onClick={handleAddtaskbtn}
      disabled={sending}
       className='border border-slate-400 py-2 px-4 rounded-r-md text-sm bg-slate-200 disabled:opacity-50'>{sending ? <l-ring-2
        size="20"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8" 
        color="black" 
      ></l-ring-2> : 'Add Task'}</button>
    </div>
  )
}

export default CreateTask;






