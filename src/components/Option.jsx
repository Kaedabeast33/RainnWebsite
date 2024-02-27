import React from 'react'
import survivors from '../assets/icons/survivors.png'

const Option = ({title,icon}) => {
  return (
    <div className='cursor-pointer w-[200px]'>
         <div className='Option flex flex-col items-center'>
                    <div className='Circle hover:shadow-lg w-[100px] h-[100px]  rounded-full' style={{backgroundImage:`url(${icon})`}}></div>
                    <p className='text-center font-bold'>{title}</p>
                </div>
    </div>
  )
}

export default Option