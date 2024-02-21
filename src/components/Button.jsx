import React from 'react'

const Button = ({className,children}) => {
  return (
   <button className={`${className} w-[200px] h-[60px] bg-slate-100 rounded  `}>{children}</button>
  )
}

export default Button