import React, { useState } from "react";
import message from "../assets/icons/message.png";
import { motion } from "framer-motion";

const HelpOption = ({ pic1, pic2,children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
  
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    
  }

  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
        className="HelpOption flip-card flex flex-col items-center"
      >
        <motion.div
        //   whileHover={{ setIsFlipped: true }}
          onAnimationComplete={() => {
            setIsAnimating(false);
          }}
          transition={{ duration: 0.1, animationDirection: "normal" }}
          initial={false}
          animate={{
            rotateY: isFlipped ? 180 : 360,
            scale: isFlipped ? 1.2 : 1,
          }}
          className="Circle flip-card-inner  h-[150px] w-[150px]  flex justify-center items-center  rounded-full"
        >
          <div className="flip-card-front purple border border-[#8F44D3] flex justify-center items-center h-full w-full rounded-full">
            <div
              style={{
                backgroundImage: `url(${pic1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              className="h-[70px] w-[70px]"
            ></div>
          </div>
          <div className="flip-card-back bg-white border-[6px] border-[#8F44D3]  flex justify-center items-center h-full w-full rounded-full">
            <div
              style={{
                backgroundImage: `url(${pic2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              className="h-[70px] w-[70px]"
            ></div>
          </div>
        </motion.div>
        <br></br>
        <h4>{children}</h4>
      </div>
    </div>
  );
};

export default HelpOption;
