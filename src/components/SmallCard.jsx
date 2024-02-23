import React from 'react'
import Button from './Button'

const SmallCard = ({title,description,button}) => {
  return (
        <div className='SmallCard relative h-[180px] sm:h-[440px] w-full sm:w-[300px] p-4  overflow-hidden bg-slate-200'>
          <h3 className='text-[20px ] font-bold sm:text-[40px]'>{title}</h3>
          <p className='text-[14px] sm:text-[20px]'>{description}</p>
          <Button className=" absolute bottom-4">{button}</Button>
        </div>
  )
}

export default SmallCard