import React from 'react'
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const Cart = ({cart:{id,productId,quantity}}) => {
  const {products} = useProductStore();
  const {increaseQuantity,decreaseQuantity,removeCart} = useCartStore();
  const product = products.find(el=> el.id === productId);
  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if(quantity > 1){
      decreaseQuantity(id);

    }else{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success('Item is removed successfully');
        }
      });
      
    }
  };


  return (
    <div className='grid grid-cols-6 border border-black p-5'>
<div className='col-span-1'>
  
    <img src={product.image} alt='empty' className='h-16' />
   
 
</div>
<div className='col-span-3'>
  <p className='mb-2'>{product.title}</p>
  <p className='text-gray-500'>{product.price}</p>
</div>
<div className='col-span-1'>
  <p className='mb-2'>Quantity</p>
<div className="flex gap-3 ">
<button onClick={handleIncreaseQuantity} className='border border-black bg-black text-white px-0.5  '>+</button>
<span>{quantity}</span >
<button onClick={handleDecreaseQuantity} className='border border-black bg-black text-white px-1'>-</button>
</div>
</div>
<div className='col-span-1 text-end text-xl font-bold mt-4'>{cost.toFixed(2)}</div>
    </div>
  );
};

export default Cart;

