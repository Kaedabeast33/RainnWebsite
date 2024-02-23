import React from 'react'

const ExplorePanels = ({className,title}) => {
  return (
    <div className={className+" h-[300px] w-full sm:h-[420px] flex flex-col justify-between items-center"}>
        <p className='text-[16px] sm:text-[36px] font-bold p-4'>{title}</p>
        <button></button>
    </div>
  )
}

export default ExplorePanels