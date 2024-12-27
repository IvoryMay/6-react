import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

 const handleIncrement = ()=>{
  setCount(count + 1);
 }

 const handleDecrement = ()=>{
  setCount(count - 1);
 }

 const handleReset = ()=>{
  setCount(0);
 }
  return (
    <div>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">React Counter</h1>
      <div className="flex justify-center mb-4">
        <p className="text-6xl font-bold text-gray-800">{count}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={handleIncrement} className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-green-600 transition duration-300 ease-in-out">
          +1
        </button>
        <button onClick={handleReset} className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-red-600 transition duration-300 ease-in-out">
          Reset
        </button>
        <button onClick={handleDecrement} className="bg-blue-500 text-white py-2 px-4 rounded-lg text-xl hover:bg-blue-600 transition duration-300 ease-in-out">
          -1
        </button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Counter;