import React from 'react';
import Rating from './Rating';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = 
({product: {
  id,
  title,
   price,
   image,
  rating: {rate},
  slug,
}}) => {

    const {carts,addCart} = useCartStore();
    const navigate = useNavigate();
    const handleAddCartBtn = (event) =>{
      event.stopPropagation();
      const newCart = {
        id: Date.now(),
        productId: id,
        quantity: 1,
      }
      addCart(newCart);
    }

    const handleAddedBtn = (event) => {
      event.stopPropagation();
      toast.error('Item is already added');
    }

    const handleOpenDetail = () => {
      navigate(`/product-detail/${slug}`);
    }
  return (
    <div onClick={handleOpenDetail} className='border border-gray-500 p-5 flex flex-col items-start gap-5'>
      <img src={image} className='h-40' alt="" />
      <p className='font-bold line-clamp-2'>{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end ">
      <p>{price}</p>
      {carts.find((cart)=> cart.productId === id)? (<button 
      onClick={handleAddedBtn} className='border border-black px-3 py-1 text-small rounded-md text-white bg-black'>Added</button>):(<button 
      onClick={handleAddCartBtn} className='text-sm border border-black px-3 py-1 rounded-md'>Add to Cart</button>)}
      </div>
    </div>
  )
}

export default ProductCard;