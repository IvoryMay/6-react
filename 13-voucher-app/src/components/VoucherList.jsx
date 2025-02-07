import React, { useRef, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash, HiSearch, HiX } from "react-icons/hi";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import { HiComputerDesktop } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherList = () => {
  const [search, setSearch] = useState("");

  const searchInput = useRef();
  // console.log(search);

  const { data, isLoading, error } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}`
      : `${import.meta.env.VITE_API_URL}/vouchers`,
    fetcher
  );

  // const handleSearch=(e)=>{
  //   setSearch(e.target.value);
  //   // console.log(e.target.value);
  // }
  // throttle(every 500ms) and debounce(after 500ms)
  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }, 1000);

  const handleClearSearch = () => {
    setSearch("");
    searchInput.current.value = "";
    // console.log(searchInput);
  };
  return (
    <section>
      <div className=" flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              onChange={handleSearch}
              ref={searchInput}
              className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher"
            />
            {search && (
              <button
                className=" absolute right-2 top-0 bottom-0 m-auto"
                onClick={handleClearSearch}
              >
                <HiX
                  fill="red"
                  className="scale-100 active:scale-90 duration-200"
                />
              </button>
            )}
          </div>
        </div>
        <div className="">
          <Link
            to={"/sale"}
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Sale
            <HiComputerDesktop />
          </Link>
        </div>
      </div>

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
              <td
                scope="row"
                colSpan={5}
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                There is no voucher yet.
              </td>
            </tr>
            {isLoading ? (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
              <td
                scope="row"
                colSpan={5}
                className="px-6 py-4 text-gray-900 dark:text-white text-center"
              >
                <div className="animate-pulse flex justify-center">
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </td>
            </tr>
            
            ) : (
              data?.map((voucher, index) => (
                <VoucherListRow key={index} voucher={voucher} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VoucherList;
