import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SearchBox from '../components/SearchBox'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <section>
        <Breadcrumb currentPageTitle={"Voucher Module"}/>
        <SearchBox search={"Search Voucher"} addNew={"Create Sale"} url={"/sale"} /> 
        <VoucherList />

    </section>
  )
}

export default VoucherPage;