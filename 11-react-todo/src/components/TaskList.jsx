import React from 'react'
import Task from './Task';

const TaskList = ({tasks, removeTask,doneTask}) => {

  


  return (
    <div>
      <h3 className='text-xl font-bold font-serif mb-3'>Task List
        (Total {tasks.length}, Done {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el)=> (
        <Task job={el} key={el.id} removeTask={removeTask} doneTask={doneTask}  />
        ))}
    </div>
  )
}

export default TaskList