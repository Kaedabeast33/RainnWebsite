import React from 'react'
import Button from './Button'

const SmallCard = ({title,description,button,bg}) => {
  return (
        <div style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}} className='SmallCard relative h-[180px] sm:h-[360px] w-full sm:w-[300px] p-4  overflow-hidden '>
          <h3 className='text-[24px] p-2 text-white font-bold lg:text-[30px]'>{title}</h3>
          <p className='mt-4 text-white p-2 h-[130px]  text-clip overflow-clip text-[14px] lg:text-[18px]'>{description}</p>
          <Button className=" absolute bottom-4">{button}</Button>
        </div>
  )
}

export default SmallCard