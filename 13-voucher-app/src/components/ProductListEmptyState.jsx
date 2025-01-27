import React from 'react'

const ProductListEmptyState = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 ">
              <td
                scope="row"
                colSpan={5}
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                There is no product yet.
              </td>
            </tr>
  )
}

export default ProductListEmptyState;