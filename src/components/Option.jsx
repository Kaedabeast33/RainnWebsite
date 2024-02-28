import React from 'react'
import survivors from '../assets/icons/survivors.png'

const Option = ({title,icon}) => {
  return (
    <div className='cursor-pointer h-[150px] w-[100px] sm:w-[200px]'>
         <div className='Option flex flex-col items-center'>
                    <div className='Circle hover:shadow-lg h-[80px] w-[80px] sm:w-[100px] sm:h-[100px]  rounded-full' style={{backgroundImage:`url(${icon})`}}></div>
                    <p className='text-[14px] text-center font-bold'>{title}</p>
                </div>
    </div>
  )
}

export default Option