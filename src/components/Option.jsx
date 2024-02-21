import React from 'react'

const Option = ({title}) => {
  return (
    <div>
         <div className='Option flex flex-col items-center'>
                    <div className='Circle w-[100px] h-[100px] bg-slate-200 rounded-full'></div>
                    <p>{title}</p>
                </div>
    </div>
  )
}

export default Option