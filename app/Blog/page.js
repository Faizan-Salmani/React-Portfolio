'use client'
import React, { useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import { Block1,Block2,Block3,texty } from '@/Components/link'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';



const Blog = () => {
  const Demon = [{data:Block1},{data:Block2},{data:Block3}]
  const [Index, setIndex] = useState(0)
  function increase(){
    if(Index === Demon.length-1){
       var changeIndex = 0;
    }
    else{
       changeIndex = Index+1;
    }
    setIndex(changeIndex)
  }
  function decrease(){
    if(Index === 0){
       var changeIndex = Demon.length-1;
    }
    else{
       changeIndex = Index-1;
    }
      setIndex(changeIndex)
  }
  return (
    <>
    <Header/>
    <div className='text-center p-10 mt-[60px] relative '>
      <h2 className='text-4xl mb-6'>A bit about me!!</h2>
      <p> {texty}</p>
      <h2 className='absolute top-[-40px] left-8 text-8xl px-8 py-1 text-sky-500 '>Blog</h2>
    </div>

    <div className='Grid h-[460px] w-full  flex justify-center items-center py-[300px]'>

    <div className=' parents w-[90%] h-[460px] top-[15%] left-[10%] bg-white '>
      <div className='img1'><img src='https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover object-center'/></div>
      <div className='img2'><img src='https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover object-center'/></div>
      <div className='img3'><img src='https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover object-center'/></div>
      <div className='img4'><img src='https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover object-center'/></div>
      <div className='img5'><img src='https://images.pexels.com/photos/12662895/pexels-photo-12662895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='w-full h-full object-cover object-center'/></div>
    </div>

    </div>


    <div className='w-full h-[350px]  '>

           <div className='w-full h-full bg-white relative '>{Demon[Index].data}
           <button className='left absolute top-[50%] left-[20px] text-3xl text-black' onClick={decrease}><AiOutlineLeft size={30}/></button>
           <button className='right absolute top-[50%] right-[20px] text-3xl text-black' onClick={increase}><AiOutlineRight size={30}/></button>
           </div>

    </div>
    <Footer/>
    </>
  )
}

export default Blog