import React, { useEffect, useState } from "react";
import jess from '../assets/chatimage/Jess.png'
import Rainn from '../assets/chatimage/Rainn.png'

const ChatBox = ({ text, lr}) => {
  const [color, setColor] = useState();
  const [lrn, setLrn] = useState();
  useEffect(() => {
    if (lr == "left-60") {
      setColor("lightblue");
      setLrn("left-[100px]")
    } else {
      setColor("darkpurple");
      setLrn("right-[100px]")
    }
  });

  return (
    <div className="flex flex-col   justify-center items-center  mx-auto w-[80vw] relative mt-5">
      <div className="flex w-full  items-center justify-center">
        <div className={`hidden sm:block w-[60px] h-[60px]  absolute ${lrn}`} style={{ backgroundImage:lr==="left-60"?`url(${Rainn})`:`url(${jess})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain" }}></div>
        <div className={`sm:hidden w-[40px] h-[40px]  absolute left-4`} style={{ backgroundImage:lr==="left-60"?`url(${Rainn})`:``,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain" }}></div>
        <div className={`hidden sm:block py-2   shadow-md w-[fit-content] max-w-[40vw] h-[fit-content] rounded rounded-full  px-2 sm:px-10 flex justify-center items-center min-w-[200px] absolute  ${lr} ${color} `}> 
          <p className="text-[14px] p-2 lg:text-[24px]">{text}</p>
        </div>
        <div className={` sm:hidden py-2 max-h-[200px] max-w-[250px]  shadow-md w-[fit-content] h-[fit-content] rounded rounded-full  px-2  flex items-center absolute  ${lr==="left-60"?"left-[65px]":"right-10"} ${color}  h-[50px]`}> 
          <p className="px-[14px] py-[2px] text-[14px] lg:text-[24px]">{text}</p>
        </div>
       
      </div>
    </div>
  );
};

export default ChatBox;
