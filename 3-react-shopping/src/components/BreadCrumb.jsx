import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({currentPageTitle}) => {
  return (
    <div className='flex  gap-1 mb-5'>
      <Link to={'/'} className='text-gray-500'>Home</Link> 
      <span>/</span>
      <p>{currentPageTitle}</p>
    </div>
  );
}

export default BreadCrumb;