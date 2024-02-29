import React, { useRef } from "react";
import Button from "./Button";

const ExplorePanels = ({ className, title, children, icon, overlay }) => {
  const ref = useRef(null);

  return (
    <div
      className={
        className +
        "   relative   h-[300px] w-[80vw] sm:w-full sm:h-[420px] flex flex-col gap-4 "
      }
    >
      <div
        ref={ref}
        className="absolute top-0 h-full w-full"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "all 0.5s",
        }}
      ></div>
      <div
        className={`absolute top-0 h-full w-full bg-[${overlay}]   opacity-70`}
      ></div>
      <p className=" text-[22px] text-white sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold p-4 z-30">
        {title}
      </p>
      <Button className={"z-30 mr-auto ml-4 mt-auto mb-10  "}>
        {children}
      </Button>
    </div>
  );
};

export default ExplorePanels;
