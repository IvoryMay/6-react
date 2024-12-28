import React, { useState } from 'react'
import Faq from './Faq';
import useFAQStore from './store/useFAQStore';

const FaqSection = () => {
  const {questions,} = useFAQStore();
  
  
  
  
  return (
    <div className='p-10'>
<h1>Frequently Asked Questions</h1>
<div className='flex flex-col'>
{questions.map((question) => (
  <Faq key={question.id}
   faq={question}
     />
))}
</div>
    </div>
  );
};

export default FaqSection;