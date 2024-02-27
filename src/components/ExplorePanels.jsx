import React, { useRef } from "react";
import Button from "./Button";

const ExplorePanels = ({ className, title, children, icon, overlay }) => {
  const ref = useRef(null);
  function handleClick() {
    ref.current.classList.add("active");
    console.log("clicked");
  }
  return (
    <div
      onMouseLeave={() => ref.current.classList.remove("active")}
      onMouseEnter={handleClick}
      className={
        className +
        " overflow-hidden  relative p-2 h-[300px] w-full sm:h-[420px] flex flex-col justify-between items-center"
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
      <p className=" text-[24px] text-white md:text-[36px] font-bold p-4 z-40">
        {title}
      </p>
      <Button className={"z-40"}>{children}</Button>
    </div>
  );
};

export default ExplorePanels;
