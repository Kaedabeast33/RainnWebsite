import React from 'react'
import { useState } from 'react';
import {motion} from "framer-motion"
const NavigationOptions = ({children}) => {
    const [animate,setAnimate] = useState(false)
    const buttonVariants = {
        initial: {
          width:0,
        },
        animate: {
            width:"100%"
          }
        
      };
      function onEnter(){
        setAnimate(true)
      }
      function onLeave(){
        setAnimate(false)
      }
  return (
    <li onMouseEnter={onEnter} onMouseLeave={onLeave} className="headerhover relative h-full w-full flex flex-col text-black  whitespace-nowrap ">
        <p>{children}</p>
        <motion.div variants={buttonVariants} animate={animate?"animate":"initial"} className="border-b bottom-[36%] w-[1px] absolute border-slate-400 "></motion.div>
    </li>
  )
}

export default NavigationOptions