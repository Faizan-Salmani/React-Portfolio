'use client'
import React from 'react'
import Slider from "react-slick";
import Products from '@/Components/link'
import Link from 'next/link'

const Cardslider = () => {
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
                breakpoint:540,
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
        <div className=' text-center mt-4 '>
            <Link href='/AllProjects' className='text-2xl py-[10px] px-[50px] w-max border-2 border-cyan-600 text-center font-bold  text-cyan-600 hover:bg-cyan-600 hover:text-white cursor-pointer'>All Projects</Link>
        </div>

        <div className='Bigger mt-[70px] w-full '>

      <div className='w-[85%] m-auto h-[380px] overflow-hidden  mb-[10px] '>
        <Slider {...settings}>
          {
              Products.map((item,index)=>(
                  <div className='bray w-[340px] h-[320px] px-[10px]  object-cover object-center rounded border-0'>
                <img src={item.url} className='w-full h-full object-cover object-center m-auto rounded'/>
              </div>
            ))
        }
        </Slider>
      </div>
        </div>

        </>
  )
}

export default Cardslider