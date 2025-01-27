import React from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import useSWR from 'swr';
import VoucherListRow from './VoucherListRow';
const fetcher = (url)=>fetch(url).then((res)=>res.json());
const VoucherList = () => {
  const {data,isLoading,error} = useSWR(import.meta.env.VITE_API_URL+'/vouchers',fetcher);
  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                # Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              
              <th scope="col" className="px-6 py-3 text-end">
                Email
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
               There is no voucher yet.
              </td>
              
            </tr>
            {!isLoading && data?.map((voucher,index)=>(<VoucherListRow key={index} voucher={voucher}/>))}
            
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default VoucherList;