import React from 'react'
import { ring2 } from 'ldrs';

const Task = ({job:{id,task, isDone}, removeTask,doneTask,}) => {

    ring2.register();
  const handleRemoveTaskBtn = () => {
if(confirm("Are you sure you want to delete this task?")){
  removeTask(id);
}
  }

  const onChangeHandler = () => {
    doneTask(id,isDone);
  };


  return (
    <div className='flex justify-between items-center border border-slate-400 p-2 mb-3 rounded-md'>
      <div className="flex items-center gap-3">
        <input
        checked={isDone}
        onChange={onChangeHandler}
         type="checkbox"
        className='size-4' />
      <p className={isDone ? 'line-through' : ''}>{task}</p>

      </div>
      <button onClick={handleRemoveTaskBtn} className='border border-slate-400 py-1 px-2 rounded-md text-sm bg-slate-200 text-slate-500'>Delete</button>
    </div>
  )
}

export default Task;