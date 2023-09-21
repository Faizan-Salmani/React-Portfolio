'use client'
import React from 'react'
import { Product1 } from '@/Components/link'
import Slider from "react-slick";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';




const page = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

        responsive:[
            {
                breakpoint:1424,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:1124,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:900,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide:2,
                    infinite:true,
                    dots:true,
                }
            }
        ]
      };

  return (
    <>
      <Header/>
       <div className=' text-center mt-4'>
            <h2 className='text-5xl'>React-js</h2>
        </div>

        <div className='Bigger w-full  mt-[20px]'>

      <div className=' m-auto h-[380px] w-[85%] overflow-hidden'>
        <Slider {...settings}>
          {
              Product1.map((item,index)=>(
                  <div className='bray w-[340px] h-[300px] px-[10px] object-cover object-center  rounded'>
                <img src={item.url} className='w-full h-full object-cover object-center m-auto rounded'/>
              </div>
            ))
        }
        </Slider>
      </div>

        </div>

       <div className='Nextjs'>
           <h2 className='text-5xl text-center mb-4'>Next-js</h2>

           <div className=' next1 flex justify-evenly '>
            <div className='w-[300px] h-[300px] rounded'>
                <img src='./image/QR1.jpg' className='w-full h-full rounded'/>
            </div>
            <div className='w-[300px] h-[300px] rounded'>
                <img src='./image/code1.jpg' className='w-full h-full rounded'/>
            </div>
           </div>

       </div>
       {/* javascript */}
       <div className='js'>
           <h2 className='text-5xl text-center my-8'>javascript</h2>
       
           <div className=' js1 flex justify-evenly '>
            <div className='w-[300px] h-[300px] rounded'>
                <img src='./image/CAR1.jpg' className='w-full h-full rounded'/>
            </div>
            <div className='w-[300px] h-[300px] rounded'>
                <img src='./image/Border1.jpg' className='w-full h-full rounded'/>
            </div>
            <div className='w-[300px] h-[300px] rounded'>
                <img src='./image/Login1.jpg' className='w-full h-full rounded'/>
            </div>
           </div>
       
       </div>
        {/* javascript end */}
        {/* html & css only starts */}
        <div className='css my-[30px]'>
           <h2 className='text-5xl text-center my-8'>HTML & CSS</h2>
       
           <div className=' css1 flex justify-evenly '>
            <div className='w-[280px] h-[300px] rounded'>
                <img src='./image/Snake1.jpg' className='w-full h-full rounded'/>
            </div>
            <div className='w-[280px] h-[300px] rounded'>
                <img src='./image/QR1.jpg' className='w-full h-full rounded'/>
            </div>
            <div className='w-[280px] h-[300px] rounded'>
                <img src='./image/Password1.jpg' className='w-full h-full rounded'/>
            </div>
            <div className='w-[280px] h-[300px] rounded'>
                <img src='./image/New netflix1.jpg' className='w-full h-full rounded'/>
            </div>
           </div>
       
       </div>
        {/* html & css only ends */}
      <Footer/>

    </>
  )
}

export default page