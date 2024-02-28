import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const NavigationOptions = ({ navigationitems = [], children,last }) => {
  const [animate, setAnimate] = useState(false);
  const [items, setItems] = useState();
  const [hidden, setHidden] = useState("hidden");
  const ref = useRef([]);

  useEffect(() => {
    ref.current = ref.current.slice(0, navigationitems.length);
  }, [navigationitems]);

  const buttonVariants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "105%",
    },
  };
  function onEnter() {
    setAnimate(true);
  }
  function onLeave() {
    setAnimate(false);
  }
  function underline(index) {
    ref.current[index].classList.add("underline");

    console.log("clicked");
  }
  function removeunderline(index) {
    ref.current[index].classList.remove("underline");
  }
  return (
    <>
      <div
        onMouseEnter={() => setHidden("")}
        onMouseLeave={() => setHidden("hidden")}
        className="flex flex-col w-full relative cursor-pointer"
      >
        <li
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="headerhover  h-full w-full flex flex-col text-black  whitespace-nowrap "
        >
          <div className="w-[fit-content] flex flex-col justify-center  items-center relative">
            <p>{children}</p>
            <motion.div
              variants={buttonVariants}
              animate={animate ? "animate" : "initial"}
              className="border-b bottom-[10%] w-[1px] absolute border-slate-400 "
            ></motion.div>
          </div>
        </li>
        <div
          className={
            " naviagtionitems absolute bg-white   top-[100%] h-[fit-content] w-[180px]  " +
            `${hidden}` +` ${last}`
          }
        >
          <ul className="sm:border-b border-r border-l w-[30vw] min-w-[fit-content] bg-white border-black">
            {navigationitems.map((item, index) => (
              <li
                className={" text-black px-4 py-2 text-[14px] flex  "+(index===0?"mt-4":"")}
                key={index}
                ref={(element) => (ref.current[index] = element)}
              >
                <p className="sm:hover:underline  w-[fit-content]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationOptions;
