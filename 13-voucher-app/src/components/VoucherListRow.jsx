import React, { useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import ShowDate from './ShowDate'
import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { bouncy } from "ldrs";

bouncy.register();


const VoucherListRow = ({voucher:{id,voucher_id,customer_name,customer_email,sale_date}}) => {
  // console.log(voucher);
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

  await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
    toast.success("Voucher is deleted successfully");
  }

  return (
    <><tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {voucher_id}
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {customer_name}
      </th>
      
      <td className="px-6 py-4 text-end">
        {customer_email}
      </td>
      <td className="px-6 py-4 te}xt-end ">
        <ShowDate timestamp={sale_date} />
      </td>
      <td className="px-6 py-4 text-end ">


     <div className="inline-flex  rounded-md shadow-sm" role="group">

<button type="button"
onClick={handleDeleteBtn}
className="size-10 flex items-center justify-center text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white rounded-lg">
  {isDeleting ? (
                <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
              ) : (
                <HiOutlineTrash />
              )}
</button>

</div>






       
      </td>
    </tr>
    </>
  )
}

export default VoucherListRow