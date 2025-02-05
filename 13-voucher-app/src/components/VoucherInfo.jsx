import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { dotSpinner } from 'ldrs'
import toast from "react-hot-toast";
import SaleForm from './SaleForm';
import VoucherTable from './VoucherTable';
import useRecordStore from '../stores/useRecordStore';
import { useNavigate } from 'react-router-dom';
dotSpinner.register()

const VoucherInfo = () => {

  const{register,handleSubmit,formState:{errors},reset} = useForm();
  const [isSending, setIsSending ] = useState(false);
const {records,resetRecords} = useRecordStore();

const navigate = useNavigate();

  const onSubmit = async (data) =>
     {
      setIsSending(true);
      const total = records.reduce((a, b) => a + b.cost, 0);
  const Tax = total * 0.7;
  const NetTotal = total + Tax;
  const currentVoucher = {...data, records,total, Tax, NetTotal };
 const res =  await fetch(import.meta.env.VITE_API_URL+"/vouchers", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(currentVoucher),
   });
    const json = await res.json();
   
   toast.success("Voucher is created successfully");
   reset();
   resetRecords();
   setIsSending(false);
   if(data.redirect_to_detail){
     navigate(`/voucher/detail/${json.id}`)}
     };


  function generateInvoiceNumber() {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id='infoForm'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-5'>
        <div className='col-span-1'>
        <label
            
            className={`block mb-2 text-sm font-medium ${
              errors.voucher_id ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Voucher ID
          </label>
          <input
            {...register("voucher_id", {
              required: true,
              
            })}
            type="text"
            defaultValue={generateInvoiceNumber()}
            className={`bg-gray-50 border ${
              errors.voucher_id
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            
          />
          {errors.voucher_id?.type === "required" && (
            <p className="text-red-500 text-xs mt-1">
              Voucher ID is required
            </p>
          )}
        </div>
        <div className='col-span-1'>
        <label
            
            className={`block mb-2 text-sm font-medium ${
              errors.voucher_id ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Customer Name
          </label>
          <input
            {...register("customer_name", {
              required: true,
              
            })}
            type="text"
            className={`bg-gray-50 border ${
              errors.customer_name
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            
          />
          {errors.customer_name?.type === "required" && (
            <p className="text-red-500 text-xs mt-1">
              Customer Name is required
            </p>
          )}
        </div>
        
        <div className='col-span-1'>
        <label
            
            className={`block mb-2 text-sm font-medium ${
              errors.customer_email ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Customer Email
          </label>
          <input
            {...register("customer_email", {
              required: true,
              
            })}
            type="text"
            className={`bg-gray-50 border ${
              errors.customer_email
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            
          />
          {errors.customer_email?.type === "required" && (
            <p className="text-red-500 text-xs mt-1">
              Customer Email is required
            </p>
          )}
        </div>
        <div className='col-span-1'>
        <label
            
            className={`block mb-2 text-sm font-medium ${
              errors.sale_date ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Sale Date
          </label>
          <input
            {...register("sale_date", {
              required: true,
              
            })}
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className={`bg-gray-50 border ${
              errors.sale_date
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            
          />
          {errors.sale_date?.type === "required" && (
            <p className="text-red-500 text-xs mt-1">
              Sale Date is required
            </p>
          )}
        </div>

        
      </div>
      
    </form>
    <SaleForm/>
    <VoucherTable/>
    <div className='flex flex-col justify-end items-end mt-3 gap-2'>
    <div className="flex  items-center gap-3">
    <label
            htmlFor="redirect_to_detail"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
           Redirect to voucher detail.
          </label>
          <input
            {...register("redirect_to_detail")}
            id="redirect_to_detail"
            type="checkbox"
            form='infoForm'
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          
        </div>
    <div className="flex  items-center gap-3">
    <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all fields are correct.
          </label>
          <input
            {...register("all-correct")}
            id="all-correct"
            type="checkbox"
            form='infoForm'
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          
        </div>
        <button
          form='infoForm'
          type="submit"
          className="text-white mt-4 inline-flex justify-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 px-5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Confirm Voucher</span>
          {isSending && (
            <l-dot-spinner
              size="20"
              speed="0.9" 
              color="white" 
            ></l-dot-spinner>
          )}
        </button>
    </div>
    
    </div>
  )
}

export default VoucherInfo