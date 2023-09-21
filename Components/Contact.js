import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='Contact h-[595px] w-full bg-zinc-800 flex justify-center items-center'>
        <div className='inside w-[70%] h-[70%] flex justify-between rounded'>
         <div className='inner bg-red-300 w-[50%] h-[70%] m-10 rounded'><img src='https://plus.unsplash.com/premium_photo-1672997189763-7002561b5e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' className='w-full h-full object-cover object-center rounded'/></div>
         <div className='h-full '>
            <h2 className='text-4xl mt-[32px]'>Let's Connect!</h2>
            <form className='formal text-center h-[300px] p-4 px-10 mt-[45px]'>
                <div className='relative mt-5'>
                <input type="text" required/>
                <label  className=' croma absolute left-0 pointer-events-none'>Full-Name</label>
                </div>
                <div className='  relative mt-5'>
                <input type="text" required/>
                <label   className=' croma absolute left-0 pointer-events-none'>E-mail</label>
                </div>
                <div className='relative mt-5 mb-10'>
                <input type="text" required/>
                <label className=' croma absolute left-0 pointer-events-none'>Message</label>
                </div>
                <Link href='#' className=' cola text-2xl px-4 py-1 '>SUBMIT</Link>
            </form>
         </div>

        </div>
    </div>
  )
}

export default Contact