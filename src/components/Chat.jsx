import React, { useEffect, useState } from "react";
import jess from '../assets/chatimage/Jess.png'
import Rainn from '../assets/chatimage/Rainn.png'

const ChatBox = ({ text, lr}) => {
  const [color, setColor] = useState();
  const [lrn, setLrn] = useState();
  useEffect(() => {
    if (lr == "left-40") {
      setColor("lightblue");
      setLrn("left-10")
    } else {
      setColor("darkpurple");
      setLrn("right-10")
    }
  });

  return (
    <div className="flex flex-col  w-[100vw] max-w-[100%] relative mt-5">
      <div className="flex w-[100vw]  items-center justify-center">
        <div className={`hidden sm:block w-[70px] h-[70px]  absolute ${lrn}`} style={{ backgroundImage:lr==="left-40"?`url(${Rainn})`:`url(${jess})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain" }}></div>
        <div className={`sm:hidden w-[40px] h-[40px]  absolute left-4`} style={{ backgroundImage:lr==="left-40"?`url(${Rainn})`:``,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain" }}></div>
        <div className={`hidden sm:block py-4 py-2 max-h-[200px] max-w-[100px] max-w-[] shadow-md w-[fit-content] h-[fit-content] rounded rounded-full  px-2 sm:px-10 flex items-center min-w-[200px] absolute  ${lr} ${color}  h-[50px]`}> 
          <p className="text-[14px] lg:text-[24px]">{text}</p>
        </div>
        <div className={` sm:hidden py-2 max-h-[200px] max-w-[200px]  shadow-md w-[fit-content] h-[fit-content] rounded rounded-full  px-2  flex items-center absolute  ${lr==="left-40"?"left-[65px]":"right-10"} ${color}  h-[50px]`}> 
          <p className="text-[14px] lg:text-[24px]">{text}</p>
        </div>
       
      </div>
    </div>
  );
};

export default ChatBox;
