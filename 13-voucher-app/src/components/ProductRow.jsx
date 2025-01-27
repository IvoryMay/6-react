import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ShowDate from "./ShowDate";

bouncy.register();

// Default values shown

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    mutate(import.meta.env.VITE_API_URL + "/products");
    toast.success("Product is deleted successfully");
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>

      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end ">
        <ShowDate timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-end ">
        <div className="inline-flex  rounded-md shadow-sm" role="group">
          <Link
            to={`/product/edit/${id}`}
            className="size-10 flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil />
          </Link>
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex items-center justify-center  text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white rounded-e-lg"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
