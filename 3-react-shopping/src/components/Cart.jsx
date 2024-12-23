import React from 'react'

const Cart = ({cart}) => {
  console.log("cart");
  return (
    <div className='grid grid-cols-6 border border-black p-5'>
<div className='col-span-1'>
  <img src={cart.product.image} alt='' className='h-16' />
</div>
<div className='col-span-3'>
  <p className='mb-2'>{cart.product.title}</p>
  <p className='text-gray-500'>{cart.product.price}</p>
</div>
<div className='col-span-1'>
  <p className='mb-2'>Quantity</p>
<div className="flex gap-3 ">
<button className='border border-black bg-black text-white px-0.5  '>+</button>
<span>3</span >
<button className='border border-black bg-black text-white px-1'>-</button>
</div>
</div>
<div className='col-span-1 text-end text-xl font-bold mt-4'>{cart.cost}</div>
    </div>
  );
};

export default Cart;

