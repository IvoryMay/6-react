import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import SearchBox from '../components/SearchBox'

const SalePage = () => {
  return (
    <section>
        <Breadcrumb currentPageTitle={"Sale Module"}/>
        <SearchBox search={"Search Sale"}
         addNew={"Add New Sale"}
         url={'/sale'}
        />

    </section>
  )
}

export default SalePage