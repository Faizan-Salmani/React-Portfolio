import React from 'react'
import {BsEmojiSmileFill} from 'react-icons/Bs'

const Imagetext = () => {
  return (
    <>
    <p className='text-5xl mt-[50px] text-center'>About Me</p>
    <div class="mains flex justify-center gap-[30px] pt-[50px] pb-[90px]">
        <div class="one w-[320px] h-[300px]">
            <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" className='w-full h-full object-cover object-center rounded-full'/>
        </div>
        <div class="two pt-[10px] w-[340px] h-[300] mt-[50px]">
           <h2 className='text-5xl'>Hii!! <p className='inline-block  text-4xl'><BsEmojiSmileFill/></p>
           </h2>
           <h2>
            I'm a Web Developer.
           </h2>
           <h2>"I thrive on turning ideas into interactive, user-friendly websites that not only look great but also function flawlessly."</h2>
           <button className='px-[20px] py-1 bg border-2 mt-[20px] hover:bg-slate-500 hover:text-black hover:border-none'>Contacts</button>
        </div>
    </div>
    </>
  )
}

export default Imagetext