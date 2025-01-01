import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
    <Header/>
    < Outlet/>
    <Footer/>
    <Toaster
     toastOptions={{
      success: {
        style: {
          background: 'white',
          text: 'green',
        },
      },
      error: {
        style: {
          background: 'white',
          text: 'red',
        },
      },
    }}
    />
    </>
  )
}

export default MainLayout;