import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-300 w-full'>
        <div className='Row1 h-[60px] '>
            <ul className='flex sm:text-[18px]  md:text-[24px] whitespace-nowrap justify-around'>
               <li className='p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-400'>Help is available 24/7</li>
                <div className='flex w-full h-full bg-slate-300'>
                   <li className='p-2 flex justify-center w-full h-full whitespace-nowrap  border-r border-slate-400'>Call 800.656.HOPE (4673)</li>
                   <li className='p-2 flex justify-center w-full h-full whitespace-nowrap '>Live Chat</li>
                </div>
               <li className='p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-400'>Donate</li>
               <li className='p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-600 text-white'>Search</li>
               <li className='p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-800 text-white'>En/Sp</li>
                
            </ul>
        </div>
        <div className='Row2 h-[80px]  grid grid-cols-12 p-2'>
            <Link to="/"><div className='Logo col-span-2 flex justify-center items-center h-full text-3xl'>Logo</div></Link>
            <div></div>
            <div className='SearchBarContainer col-span-9  h-full   flex items-center justify-center  p-2'>
            <ul className='flex gap-4 sm:text-[12px] md:text-[18px] flex justify-between w-full justify-end'>
                <li className='whitespace-nowrap'>About Rainn</li>
                <li className='whitespace-nowrap'>Counseling & Training</li>
                <li className='whitespace-nowrap'>Press Center</li>
                <li className='whitespace-nowrap'>Public Policy</li>
                <li className='whitespace-nowrap'>Support Rainn</li>
                <li className='whitespace-nowrap'>Sexual Violence</li>
                
            </ul>
            </div>
        </div>
        
        
       
    </header>
  )
}

export default Header