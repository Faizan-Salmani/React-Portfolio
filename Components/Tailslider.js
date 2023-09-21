import React, { useState } from 'react'
import {BsCaretRight} from 'react-icons/bs'
import {BsCaretLeft} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


const tailslider = () => {
    const Slides = [{url:'https://images.pexels.com/photos/2524374/pexels-photo-2524374.jpeg?auto=compress&cs=tinysrgb&w=600'},
{url:'https://images.pexels.com/photos/2583496/pexels-photo-2583496.jpeg?auto=compress&cs=tinysrgb&w=600'},
{url:'https://images.pexels.com/photos/2528408/pexels-photo-2528408.jpeg?auto=compress&cs=tinysrgb&w=600'},
{url:'https://images.pexels.com/photos/2528352/pexels-photo-2528352.jpeg?auto=compress&cs=tinysrgb&w=600'}]
const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex);
}
const [currentIndex,setCurrentIndex] = useState(0);
const prevSlide = () =>{
const isFirstSlide = currentIndex === 0;
const newIndex = isFirstSlide?Slides.length-1:currentIndex-1;
setCurrentIndex(newIndex);
}
const nextSlide=()=>{
const isLastSlide = currentIndex === Slides.length-1;
const newIndex = isLastSlide?0:currentIndex+1;
setCurrentIndex(newIndex);
}
  return (
    <div className=' Tail max-w-[1400px] h-[600px] w-full m-auto py-12 px-8 group relative'>
      <div style={{backgroundImage:`url(${Slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
       {/* left button */}
        <div className=' hidden group-hover:block absolute top-[50%] right-[32px] text-2xl text-white' onClick={nextSlide}><BsCaretRight size={30}/></div>
        <div className='hidden group-hover:block absolute top-[50%] left-[32px] text-2xl text-white' onClick={prevSlide}><BsCaretLeft size={30}/></div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {Slides.map((slide,slideIndex) =>(
            <div key={slideIndex} onClick ={()=>goToSlide(slideIndex)}className='text-2xl cursor-pointer'><RxDotFilled/></div>
        ))}
      </div>
    </div>
  )
}

export default tailslider