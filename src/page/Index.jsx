import React from 'react'

import { Outlet } from 'react-router-dom/dist'
import Header from '../component/Header'
import Footer from '../component/Footer'


const Index = () => {
  return (
    <>
    
     <Header/>
    <Outlet/>
    <Footer/>
    </>
   
  )
}

export default Index