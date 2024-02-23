import React from 'react'

const Button = ({className,children}) => {
  return (
   <button className={`${className} max-w-[100%] p-2 min-w-[100px] w-[15vw] h-[60px] bg-slate-100 rounded  `}>{children}</button>
  )
}

export default Button