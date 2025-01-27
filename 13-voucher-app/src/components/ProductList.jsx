import React from "react";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyState from "./ProductListEmptyState";
import ProductRow from "./ProductRow";



const fetcher = (url)=>fetch(url).then((res)=>res.json());
const ProductList = () => {

  // console.log(import.meta.env.VITE_API_URL);
  const {data,isLoading,error} = useSWR(import.meta.env.VITE_API_URL+'/products',fetcher);
  
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
            
            {isLoading ? <ProductListSkeletonLoader /> :data.length === 0 ?( <ProductListEmptyState/>):(data.map((product)=><ProductRow key= {product.id} product={product} />))

            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
