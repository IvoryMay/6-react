import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext';
import useTaskStore from '../store/useTaskStore';

const Task = ({job:{id,task, isDone}}) => {

  // const {removeTask, doneTask} = useContext(TaskContext);

  const {removeTask,doneTask} = useTaskStore();
  const handleRemoveTaskBtn = () => {
if(confirm("Are you sure you want to delete this task?")){
  removeTask(id);
}
  }



  const onChangeHandler = () => {
    doneTask(id);
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