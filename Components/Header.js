import React from 'react'
import Link from 'next/link'
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";


const Header = () => {
  return (
    <>
    <header className='header  h-15'>
      <nav className=' nav  flex justify-between  items-center h-15 text-xl w-[96%] m-auto'>
        <div className=''>Logo</div>

        <div>
        <input type="checkbox" name="" id="check" ></input>
    <label for="check" class="menu-btn">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </label>
          <ul className='ul flex gap-x-2 pt-[-40px]'>
            <li className='px-4 py-4 hover:bg-white hover:text-black'><Link href='/Home'>Home</Link></li>
            <li className='px-4 py-4 hover:bg-white hover:text-black'><Link href='/About'>About</Link></li>
            <li className='Services relative px-4 py-4 hover:bg-white hover:text-black'><Link href='/AllProjects'>Projects</Link>
            {/* <p className='drop absolute top-[19.2px] left-[84.8px] text-xl'><BiChevronDown/></p> */}
              {/* <div className=' downs absolute top-[60px] w-[280px] left-[-80px] hidden bg-white rounded-sm '>
                <h3 className='p-2'>Boys Clothing</h3>
                <ul className=' ul1 text-sm mt-[2px]'>
                  <li className='hover:bg-slate-200 '><Link href=''>Lip Stick</Link></li> <li className='hover:bg-slate-200'><Link href=''>Lip Gloss</Link></li> <li className='hover:bg-slate-200'><Link href=''>Lip Liner</Link></li> <li className='hover:bg-slate-200'><Link href=''>Kajal</Link></li>
                </ul>
              </div> */}
            </li>
            <li className='px-4 py-4 hover:bg-white hover:text-black '><Link href='/Contacts'>Contacts</Link></li>
            <li className='px-4 py-4 hover:bg-white hover:text-black'><Link href='/Blog'>Blog</Link></li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header