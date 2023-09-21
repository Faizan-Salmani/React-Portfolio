import React from 'react'
import Contact from '@/Components/Contact'
import Header from '@/Components/Header'
import Tailslider2 from '@/Components/Tailslider2'
import Imagetext from '@/Components/Imagetext'
import Cardslider from '@/Components/Cardslider'
import Footer from '@/Components/Footer'


const page = () => {
  return (
    <>
     <Header/>
     <Tailslider2/> 
     <Imagetext/> 
     <Cardslider/> 
     <Contact/>  
     <Footer/>  
    </>
  )
}

export default page