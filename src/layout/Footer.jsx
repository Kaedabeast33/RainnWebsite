import React from 'react'
import Button from '../components/Button'

const Footer = () => {
  return (
    <footer className='flex h-[290px] justify-between  bg-slate-400 items-center'>
        <div className=' flex flex-col Subscribe'>
        <ul>
            <li>Get Rainn Updates</li>
        </ul>
        <div className='SubscribeForm flex flex-col'>
            <div className='p-2'>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            </div>
            <div className='flex  justify-start p-2'>
            <input className=' ' type="text" placeholder='Email Address ' />
            <button className='bg-slate-700 text-white p-2 rounded'>Subscribe</button>
            </div>
        </div>
        </div>
        <div className=' flex flex-col Charity'>
        <ul>
            <li>Charity</li>
            <li>Contact</li>
            <li>Federal Funding Disclaimer</li>
        </ul>
        </div>
        <div className=' flex flex-col Legal'>
            <ul>
                <li>Legal Disclosure</li>
                <li>Jobs</li>
                <li>Take Action</li>
            </ul>
        </div>
        <div className=' flex flex-col Stats'>
        <ul>
                <li>Statistics</li>
                <li>Store</li>
                <li>Volunteer</li>
            </ul>
        </div>
        <div className=' flex flex-col Ratings gap-4'>
            <p>Charity Ratings</p>
            <div className='flex'>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
                
            </div>
            <div className='Socials flex'>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
                <div className='h-[50px] bg-slate-200 w-[50px]'></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer