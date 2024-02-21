import React from 'react'

const Stories = ({name}) => {
  return (
    <div className='h-[340px] w-[300px] relative bg-slate-300'>
        <img></img>
       
        <div className='h-[100px] absolute bottom-0 bg-slate-400 w-full'> <h4 className='text-white text-[36px]'>{name}</h4></div>
    </div>
  )
}

export default Stories