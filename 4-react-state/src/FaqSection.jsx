import React, { useState } from 'react'
import Faq from './Faq';

const FaqSection = () => {
  const[ questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is JSX?",
      answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript, used with React to describe what the UI should look like. It allows you to write HTML-like code within JavaScript.",
      isOpen: true,
    },
    {
      id: 3,
      question: "What are React components?",
      answer: "Components are the building blocks of a React application. They are reusable pieces of UI that can be either class-based or functional.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is the difference between state and props in React?",
      answer: "State is a built-in object that stores data about the component. Props are inputs to components that are passed down from parent to child components and are read-only.",
      isOpen: false,
    },
    
  ]);

  const toggleQuestion = (id) => {
    setQuestions(questions.map((el)=>el.id === id ? {...el, isOpen: !el.isOpen} : {...el, isOpen: false}));
  }
  
  
  
  return (
    <div className='p-10'>
<h1>Frequently Asked Questions</h1>
<div className='flex flex-col'>
{questions.map((question) => (
  <Faq key={question.id}
   faq={question}
   toggleQuestion={toggleQuestion}  />
))}
</div>
    </div>
  );
};

export default FaqSection;