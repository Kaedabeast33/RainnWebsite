import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react'
const Stories = ({name,bg}) => {
  const [animate, setAnimate] = useState(false)
  return (
    <div className='purple overflow-hidden grid grid-rows-12 min-w-[100vw] sm:min-w-[200px]   h-[330px] sm:w-[400px] relative '>
        <motion.div onMouseOver={()=>setAnimate(true)} onMouseLeave={()=>setAnimate(false)} animate={animate?"animate":"initial"} transition={{duration:0.3}} variants={{initial:{scale:1},animate:{scale:1.1}}} className='h-full w-full row-span-9 '  style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}></motion.div>
       
        <div className='  h-[80px]    w-full flex justify-center items-center'> <h4 className='text-white text-[36px] sm:text-[24px] md:text-[36px]'>{name}</h4></div>
    </div>
  )
}

export default Stories