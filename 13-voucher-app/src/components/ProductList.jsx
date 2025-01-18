import React from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'

const ProductList = () => {
  return (
    <div>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-6 py-3">
          #
        </th>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        
        <th scope="col" className="px-6 py-3 text-end">
          Price
        </th>
        <th scope="col" className="px-6 py-3 text-end">
          Created at
        </th>
        <th scope="col" className="px-6 py-3 text-end">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
      <td scope="row" colSpan={5} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
         There is no product yet.
        </td>
        
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          1
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        
        <td className="px-6 py-4 text-end">
          $2999
        </td>
        <td className="px-6 py-4 text-end ">
          <p className='text-xs'>18 Jan 20025</p>
          <p className='text-xs'>2:13 PM</p>
        </td>
        <td className="px-6 py-4 text-end ">


       <div className="inline-flex  rounded-md shadow-sm" role="group">
  <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    <HiOutlinePencil/ >
  </button>
  <button type="button" className="px-4 py-2 text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white rounded-e-lg">
    <HiOutlineTrash/>
  </button>
  
</div>






         
        </td>
      </tr>
      
    </tbody>
  </table>
</div>


    </div>
  )
}

export default ProductList