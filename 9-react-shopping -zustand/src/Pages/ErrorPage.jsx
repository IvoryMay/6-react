

import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='flex justify-center items-center h-screen w-full mb-3'>
      <div className='text-center flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-bold mb-3'>Ooops!</h1>
        <h1 className='text-5xl font-bold mb-3'>404 page not found</h1>
        <p className='mb-3 text-gray-400 w-96'>Sorry, the page you're looking for doesn't exist.Spsum dolor sit amet consectetur adipisicing elit. Ipsam, commodi?
        </p>
        <Link to={'/'} className='text-md border border-black px-3 py-1 rounded-md'>Go Home</Link>
      </div>
    </section>
  )
}

export default ErrorPage;

