import React from 'react'
import products from '../data/products';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Rating from '../components/Rating';
import BreadCrumb from '../components/BreadCrumb';

const ProductDetail = () => {
  const {productId} = useParams();
  const currentProduct = products.find((product) => product.id == productId);
  console.log(currentProduct);
  return (
    <Container>
      <BreadCrumb currentPageTitle="Product Detail" />
     <div className="border border-black p-10">
      <div className='grid grid-cols-2'>
        <div className="colspan-1">
          <img 
          src={currentProduct.image} 
          className='w-3/4 block mx-auto' 
          alt="" />
        </div>
        <div className="colspan-1 flex flex-col gap-5 items-start">
          <h3 className='text-2xl font-bold'>{currentProduct.title}</h3>
          <p className='text-gray-700 bg-gray-300 rounded-md px-3 py-1 inline-block'>{currentProduct.category}</p>
          <p className=''>{currentProduct.description}</p>
          <Rating rate={currentProduct.rating.rate} />
          <div className=" flex justify-between w-full items-center">
          <p>{currentProduct.price}</p>
          <button className='text-sm border border-black px-3 py-1 rounded-md'>Add to Cart</button>
          </div>
        </div>
      </div>
      </div> 
    </Container>
  )
}

export default ProductDetail;