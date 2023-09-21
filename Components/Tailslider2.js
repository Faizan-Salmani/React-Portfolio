'use client'
import React, { useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {RxDotFilled} from 'react-icons/rx'



const Tailslider2 = () => {
    const Slides = [{url:'./image/web3.jpg'},
                    {url:'./image/web1.jpg'},
                    {url:'./image/web2.jpg'},
                    {url:'./image/web4.jpg'}]
    const moveToSlide = (newDot) =>{
              setIndex(newDot)
    }
    const [Index, setIndex] = useState(0)
    const prevSlide = ()=>{
          if(Index===0){
            var  changeIndex = Slides.length-1;
          }
          else{
            changeIndex = Index-1;
          }
          setIndex(changeIndex)
    }
    const nextSlide = ()=>{
        if(Index===Slides.length-1){
            var  changeIndex =0;
          }
          else{
            changeIndex = Index+1;
          }
          setIndex(changeIndex)
    }
  return (
    <div className="Tail max-w-[1500px] h-[595px] m-auto w-full py-0  relative group">
    <div style={{backgroundImage:`url(${Slides[Index].url})`}} className='w-full h-full bg-cover bg-center'></div>
    <div className='hidden group-hover:block absolute top-[50%] left-[15px] text-3xl  text-white   cursor-pointer' onClick={prevSlide}><AiOutlineLeft/></div>
    <div className=' hidden group-hover:block absolute top-[50%] right-[15px] text-3xl text-white   cursor-pointer' onClick={nextSlide}><AiOutlineRight/></div>
        
        <div className='flex justify-center pt-1 cursor-pointer bg-white text-2xl'>
            {
                Slides.map((Dot,newDot)=>(
                    <div key={newDot} onClick={()=>moveToSlide(newDot)}><RxDotFilled/></div>
                ))
            }
        </div>
    </div>
  )
}


export default Tailslider2