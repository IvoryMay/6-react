import React, { useState } from 'react'

const App = () => {

  const [ count, setCount] =useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  return (
    <div className='p-10'> 
      <h1 className='text-9xl mb-3'>{count}</h1>
      <button onClick={handleIncrement} className='bg-blue-500 text-white px-4 py-2 m-2'>Increment</button>
      <button onClick={handleDecrement} className='bg-blue-500 text-white px-4 py-2 m-2'>Decrement</button>

    </div>
  )
}

export default App;