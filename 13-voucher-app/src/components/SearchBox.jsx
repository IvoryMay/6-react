import React from 'react'
import { HiPlus, HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const SearchBox = ({search,addNew,url}) => {
  return (
    <div className='mb-3'>
      <div className='flex justify-between'>
<div>
<div className="relative w-full">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <HiSearch className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
  </div>
  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={search} />
</div>

</div>
<div>
<Link to={url} className="flex items-center justify-center gap-2 p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  
<p>{addNew}</p>
  <HiPlus/> 
</Link>

</div>
      </div>
    </div>
  )
}

export default SearchBox;