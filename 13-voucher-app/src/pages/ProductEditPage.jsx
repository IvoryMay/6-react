import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCreateCard';
import ProductCreateCard from '../components/ProductCreateCard';
import ProductEditCard from '../components/ProductEditCard';

const ProductEditPage = () => {
  return (
    <section> 

    <Container>
      <Breadcrumb currentPageTitle={"Edit Product"} links={[{url:"/product",name:"Product Module"}]} />
      <ProductEditCard/>
      </Container>
      </section>
  )
}

export default ProductEditPage;