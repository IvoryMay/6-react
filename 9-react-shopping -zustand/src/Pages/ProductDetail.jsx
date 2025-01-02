import React from 'react'
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Rating from '../components/Rating';
import BreadCrumb from '../components/BreadCrumb';
import useProductStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import toast from 'react-hot-toast';

const ProductDetail = () => {

  const {products} = useProductStore();

  const {productSlug} = useParams();

  const {carts,addCart} = useCartStore();

  
  const currentProduct = products.find((product) => product.slug == productSlug);
  console.log(currentProduct);

  const handleAddCartBtn = (event) =>{
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    }
    addCart(newCart);
  };

  const handleAddedBtn = () => {
    toast.error('Item is already added');
  };

  return (
    <Container className="px-5">
      <BreadCrumb currentPageTitle="Product Detail" />
     <div className="border border-black p-10">
      <div className='grid grid-cols-1 md:grid-cols-2 mb-5 md:mb-0'>
        <div className="colspan-1">
          <img 
          src={currentProduct.image} 
          className='w-[200px] md:w-3/4 block md:mx-auto' 
          alt="" />
        </div>
        <div className="colspan-1 flex flex-col gap-5 items-start">
          <h3 className='text-2xl font-bold'>{currentProduct.title}</h3>
          <p className='text-gray-700 bg-gray-300 rounded-md px-3 py-1 inline-block'>{currentProduct.category}</p>
          <p className=''>{currentProduct.description}</p>
          <Rating rate={currentProduct.rating.rate} />
          <div className=" flex justify-between w-full items-center">
          <p>{currentProduct.price}</p>
          {/* <button onClick={handleAddCartBtn} className='text-sm border border-black px-3 py-1 rounded-md'>Add to Cart</button> */}
          {carts.find((cart)=> cart.productId === currentProduct.id)? (<button 
      onClick={handleAddedBtn} className='border border-black px-3 py-1 text-small rounded-md text-white bg-black'>Added</button>):(<button 
      onClick={handleAddCartBtn} className='text-sm border border-black px-3 py-1 rounded-md'>Add to Cart</button>)}
          </div>
        </div>
      </div>
      </div> 
    </Container>
  )
}

export default ProductDetail;