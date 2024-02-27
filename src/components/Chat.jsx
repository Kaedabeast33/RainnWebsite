import React, { useEffect, useState } from "react";

const ChatBox = ({ text, lr }) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (lr == "left-10") {
      setColor("#DCE6FF");
    } else {
      setColor("#673D8D");
    }
  });
  return (
    <div className="w-[100vw] max-w-[100%] relative mt-5">
      <div
        className={`w-[fit-content] rounded rounded-full  px-5 flex items-center min-w-[300px] absolute ${lr} bg-[${color}]  h-[50px]`}
      >
        <p className="text-[24px]">{text}</p>
      </div>
    </div>
  );
};

export default ChatBox;
