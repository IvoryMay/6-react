import { useState } from 'react'
import Counter from './counter'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import TaskProvider from './context/TaskProvider'

function App() {

  return (
    
    //  <TaskProvider>
        <div className='p-10'>
        <Heading/>
        <CreateTask/>
        <TaskList/>
        </div>
        
        // </TaskProvider>
      // <Counter />
    )
  
};

export default App
