import React, { useState } from 'react'

const ShowMyName = () => {

  const [name, setName] = useState("");

  const handleTheint = ()=>{
    setName(name +"Theint");
  }

  const handleSandi = ()=>{
    setName(name +" Sandi");
  }
  const handleKyaw = ()=>{
    setName(name +" Kyaw");
  }

  const handleClear = ()=>{
    setName("");
  }
  return (
    <div className='p-10'>
      <h1 className='text-4xl mb-3' >My name is "{name}"</h1>
      <button className='bg-blue-500 text-white px-4 py-2 m-2' onClick={handleTheint}>Theint</button>

      <button className='bg-blue-500 text-white px-4 py-2 m-2' onClick={handleSandi}>Sandi</button>
      <button className='bg-blue-500 text-white px-4 py-2 m-2' onClick={handleKyaw}> Kyaw</button>
      <button className='bg-pink-400 text-white px-4 py-2 m-2'
      onClick={handleClear}>
        clear
      </button>
    </div>
  )
}

export default ShowMyName;