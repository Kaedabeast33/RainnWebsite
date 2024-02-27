import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const LiveChatModal = ({ setModal }) => {
  function handleClick() {
    console.log("clicked");
    setModal(false);
  }
  return (
    <>
      <div onClick={handleClick} className="z-50 fixed  top-0 left-0 w-[100vw] h-[100vh]">
        <div className="bg-black opacity-50 fixed w-[100vw] h-[100vh]"></div>
        <div className="z-50 absolute flex flex-col items-center justify-center opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[#324881] rounded-lg min-w-[300px] min-h-[460px]">
          <div className="absolute top-4 right-10 w-[30px] h-[30px]">
            <p onClick={handleClick} className="cursor-pointer text-white text-[40px]">
              X
            </p>
          </div>
          <h1 className="text-white text-[40px] my-4 font-black">
            Start Live Chat?
          </h1>
          <div className="flex my-4 gap-4">
            <div onClick={handleClick} className="">
            <Link to="/chat">
              <Button>Start</Button>
            </Link>
            </div>
           <div onClick={handleClick} className=""><Button>Cancel</Button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChatModal;
