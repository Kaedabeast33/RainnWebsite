import React, { useRef } from "react";
import Button from "./Button";

const ExplorePanels = ({ className, title, children, icon, overlay }) => {
  const ref = useRef(null);
 
  return (
    <div
      
      className={
        className +
        " overflow-hidden  relative p-2 h-[300px] w-full sm:h-[420px] flex flex-col gap-4 "
      }
    >
      <div
        ref={ref}
        className="absolute top-0 h-full w-full"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "",
          transition: "all 0.5s",
        }}
      ></div>
      <div
        className={`absolute top-0 h-full w-full bg-[${overlay}]   opacity-70`}
      ></div>
      <p className=" text-[24px] text-white sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold p-4 z-40">
        {title}
      </p>
      <Button  className={"z-40 mx-4 absolute md:bottom-10 bottom-20"}>{children}</Button>
    </div>
  );
};

export default ExplorePanels;
