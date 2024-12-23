import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import carts from '../data/carts';

const ProductCard = 
({product: {
  id,
  title,
   price,
   image,
  rating: {rate}}}) => {
  return (
    <Link to={`/product-detail/${id}`} className='border border-gray-500 p-5 flex flex-col items-start gap-5'>
      <img src={image} className='h-40' alt="" />
      <p className='font-bold line-clamp-2'>{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end ">
      <p>{price}</p>
      {carts.find((cart)=> cart.product.id === id)? (<button className='border border-black px-3 py-1 text-small rounded-md text-white bg-black'>Added</button>):(<button className='text-sm border border-black px-3 py-1 rounded-md'>Add to Cart</button>)}
      </div>
    </Link>
  )
}

export default ProductCard;