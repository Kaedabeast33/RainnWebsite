import React from 'react'

const Row1Option = ({span,color,children,text="text-white"}) => {
  return (
    <li className={`text-[12px] min-w-[fit-content] lg:text-[18px]  flex justify-center items-center h-full whitespace-nowrap  ${text} ${span} ${color}`}>
    {children}
  </li>
  )
}

export default Row1Option