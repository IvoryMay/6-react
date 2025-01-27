import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SearchBox from '../components/SearchBox'
import VoucherList from '../components/VoucherList'
import Container from '../components/Container'

const VoucherPage = () => {
  return (
    <section>
        <Container>
        <Breadcrumb currentPageTitle={"Voucher Module"}/>
        <SearchBox search={"Search Voucher"} addNew={"Create Sale"} url={"/sale"} /> 
        <VoucherList />
        </Container>

    </section>
  )
}

export default VoucherPage;