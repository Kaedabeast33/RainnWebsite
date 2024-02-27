import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);
  return (
    <header className="overflow-hidden w-full">
      {hamMenu ? (
        <>
          <div className="fixed h-[300vh] w-[300vw] opacity-50 bg-black z-40"></div>
          <div className="h-[90vh] w-[100vw] p-10 fixed bg-slate-300 opacity-100 z-50">
            <div className="flex justify-between">
              <div className="Language"></div>
              <p onClick={() => setHamMenu(!hamMenu)} className="text-2xl">
                X
              </p>
            </div>
          </div>
        </>
      ) : null}

      <div className="Row w-full hidden sm:block bg-slate-300">
        <ul className="grid grid-cols-24 text-[12px] w-[100vw]  lg:text-[18px]  md:texspace-nowrap justify-around">
          <li className="text-[12px] min-w-[fit-content] col-span-5    lg:text-[18px] p-2 flex justify-center  h-full whitespace-nowrap darkblue text-white">
            Help is available 24/7
          </li>
          <div className="grid grid-cols-4 col-span-10  h-full  lavender">
            <li className="text-[12px] col-span-3  lg:text-[18px] p-2  flex justify-center  h-full whitespace-nowrap  border-r border-slate-400">
              Call 800.656.HOPE (4673)
            </li>
            <li className=" text-[12px]  lg:text-[18px] min-w-[fit-content] flex py-2 justify-center h-full whitespace-nowrap  ">
              Live Chat
            </li>
          </div>
          <li className=" col-span-3 text-[12px] min-w-[fit-content] lg:text-[18px]  p-2 flex justify-center  h-full whitespace-nowrap purple">
            Donate
          </li>
          <li className=" col-span-2 text-[12px] min-w-[fit-content] lg:text-[18px] p-2 flex justify-center  h-full whitespace-nowrap  text-white blue">
            Search
          </li>
          <li className="col-span-4  text-[12px] min-w-[fit-content]  lg:text-[18px]  p-2 flex justify-center  h-full whitespace-nowrap darkblue text-white">
            En/Sp
          </li>
        </ul>
      </div>
      <div className="Row2 relative  h-[100px] flex justify-between items-center  sm:grid grid-cols-12 px-2">
        <Link className="p-10 sm:p-0" to="/">
          <div className="Logo  absolute col-span-2 top-0 h-[100px] w-[200px] "></div>
        </Link>
        <div>
          <p onClick={() => setHamMenu(!hamMenu)} className="mx-2  sm:hidden">
            Menu
          </p>{" "}
        </div>

        <div className="SearchBarContainer hidden sm:block sm:col-span-10 md:col-span-9 h-full    flex items-center justify-center  p-2">
          <ul className="flex gap-4 sm:text-[12px] h-full lg:text-[18px] text-black flex justify-between items-center w-full justify-end">
            <li className="headerhover  h-full w-full flex  text-black  whitespace-nowrap ">
              About Rainn
            </li>
            <li className="headerhover justify-center items-center h-full w-full text-black whitespace-nowrap">
              Counseling & Training
            </li>
            <li className="headerhover justify-center items-center h-full w-full text-black whitespace-nowrap">
              Press Center
            </li>
            <li className="headerhover justify-center items-center h-full w-full text-black whitespace-nowrap">
              Public Policy
            </li>
            <li className="headerhover justify-center items-center h-full w-full text-black whitespace-nowrap">
              Support Rainn
            </li>
            <li className="headerhover justify-center items-center h-full w-full text-black whitespace-nowrap">
              Sexual Violence
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:hidden flex flex-col justify-center items-center">
        <div className="h-[40px]  w-full ">
          <p className="text-center text-[24px] text-white">
            Help is available 24/7
          </p>
        </div>
        <div className="h-[40px] w-full  flex justify-center whitespace-nowrap">
          <p className="text-center border-r border-slate-400 text-[16px]  ">
            Call 800.656.HOPE (4673)
          </p>
          <p className="text-center text-[16px]">Donate</p>
          <p className="">Live Chat</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
