import React from 'react'

const Button = ({className,children,onclick}) => {
  return (
   <button onClick={onclick} className={`${className} buttonhover whitespace-nowrap  purple max-w-[100%] hover:shadow-lg text-white p-2 w-[25vw] min-w-[fit-content] h-[40px] sm:w-[15vw] sm:h-[60px] shadow-md rounded `}>{children}</button>
  )
}

export default Button