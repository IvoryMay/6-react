import React from 'react'
import Container from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import VoucherCard from '../components/VoucherCard';

const VoucherDetailPage = () => {
  return (
    <section> 

    <Container>
      <Breadcrumb currentPageTitle={"Voucher Detail"} links={[{url:"/voucher",name:"Voucher Module"}]} />
      <VoucherCard/>
      </Container>
      </section>
  )
}

export default VoucherDetailPage;