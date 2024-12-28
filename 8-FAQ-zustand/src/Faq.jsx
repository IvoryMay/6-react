import React, { useState } from 'react'
import useFAQStore from './store/useFAQStore';



const Faq = ({faq: {id, question, answer,isOpen}, }) => {

  const {toggleQuestion} = useFAQStore();
  // const [open, setOpen] = useState(false);

// const handleOpen = ()=>{
// setOpen(true);
// }

const handleToggle = ()=>{
  toggleQuestion(id);
}


  return (
   <div className="">
     <div className='flex justify-between border border-black p-3 select-none active:scale-90 duration-200' onClick={handleToggle}>
      <h1 className={`text-xl ${isOpen === false ? "" : "font-bold" }`}>{question}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 duration-600 ${isOpen === false ? "" : "rotate-180"}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

    </div>


    <p className={`border border-black p-3 bg-gray-300 ${isOpen === false ? "hidden" : ""}`}>{answer}</p>
   </div>
  )
}

export default Faq;