import React from 'react'

const Button = ({className,children}) => {
  return (
   <button className={`${className} purple max-w-[100%] hover:shadow-lg text-white p-2  w-[15vw] h-[60px] shadow-sm rounded  `}>{children}</button>
  )
}

export default Button