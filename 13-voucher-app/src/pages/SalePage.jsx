import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SearchBox from '../components/SearchBox'
import Container from '../components/Container'
import VoucherInfo from '../components/VoucherInfo'
import SaleForm from '../components/SaleForm'


const SalePage = () => {
  return (
    <section>
        <Container>
        <Breadcrumb currentPageTitle={"Sale Module"}/>
        {/* <SearchBox search={"Search Sale"}
         addNew={"Add New Sale"}
         url={'/sale'}
        /> */}
        <VoucherInfo/>
        
        </Container>

    </section>
  )
}

export default SalePage