import React from 'react'

const Button = (props,{className}) => {
  return (
   <button className={" w-[200px] h-[60px] bg-slate-200 rounded"+className}>{props.children}</button>
  )
}

export default Button