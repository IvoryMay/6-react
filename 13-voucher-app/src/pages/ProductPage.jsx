import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductList from '../components/ProductList'
import SearchBox from '../components/SearchBox'

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"}/>
        
        <SearchBox search={"Search product here..."}
         addNew={"Add New Product"}
         url={"/product/create"} />
        <ProductList />
      </Container>
    </section>
  )
}

export default ProductPage