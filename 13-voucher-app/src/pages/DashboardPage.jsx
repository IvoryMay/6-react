import React from 'react'
import Container from '../components/Container'
import Modulebtn from '../components/Modulebtn';
import { HiDatabase, HiDocumentDuplicate } from "react-icons/hi";
import { HiComputerDesktop } from 'react-icons/hi2';

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-5'>
          <div className="col-span-1 row-span-1">
            <Modulebtn name={"Product Module"} icon={<HiDatabase className='size-14'/>} url='/product'/>
          </div>

          <div className="col-span-1 row-span-1">
            <Modulebtn name={"Sale Module"} icon={<HiComputerDesktop className='size-14' />} url='/sale'/>
          </div>

          <div className="col-span-1 row-span-1">
            <Modulebtn name={"Voucher Module"} icon={<HiDocumentDuplicate className='size-14'/>} url='/voucher'/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DashboardPage;


