import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { HiChevronRight, HiOutlineChevronRight, HiOutlineHome } from 'react-icons/hi';

const Breadcrumb = ({currentPageTitle,links}) => {
  return (
    <section>
      <div className='w-full flex gap-3 mb-5'>
    <nav className="flex " aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center ">
      <Link to={"/"} className="inline-flex gap-3 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
      <HiOutlineHome className='size-5' />
        Home
      </Link>
    </li>

  {links && links.map((link,index)=><li className="inline-flex items-center" key={index}>
      <div className="flex items-center">
        <HiChevronRight className='size-5' />
        <Link to={link.url} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{link.name}</Link>
      </div>
    </li>)}
    
    <li aria-current="page">
      <div className="flex items-center gap-3">
      <HiOutlineChevronRight />
        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{currentPageTitle}</span>
      </div>
    </li>
  </ol>
</nav>

      </div>
    </section>
  )
}

export default Breadcrumb;