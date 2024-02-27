import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/icons/Vector.png";
import search from "../assets/icons/MagnifyingGlass.png";
import { motion } from "framer-motion";
import NavigationOptions from "./NavigationOptions";
import Row1Option from "./Row1Option";
import { useGlobalContext } from "../context/GlobalContext";
import LiveChatModal from "../components/LiveChatModal";

const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const {modal,setModal}=useGlobalContext()

  return (
    <header className=" w-full">
       {modal?<LiveChatModal setModal={setModal}></LiveChatModal>
      :null}
      {hamMenu ? (
        <>
          <div className="fixed h-[300vh] w-[300vw] opacity-50 bg-black z-30"></div>
          <div className="h-[90vh] w-[100vw] p-10 fixed bg-slate-300 opacity-100 z-40">
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
          <Row1Option span={"col-span-5"} color="darkblue">
            Help is available 24/7
          </Row1Option>
          <div className="grid grid-cols-4 col-span-11  h-full  lavender">
            <Link
              className="text-[12px] col-span-3  lg:text-[18px] p-2  flex justify-center  h-full whitespace-nowrap  border-r border-slate-400"
              to={"/gethelp"}
            >
              <Row1Option span={""} color="" text="text-black">
                Call 800.656.HOPE (4673)
              </Row1Option>
            </Link>
            <div onClick={()=>setModal(true)}
              className="text-[12px] cursor-pointer  lg:text-[18px] min-w-[fit-content] flex py-2 justify-center h-full whitespace-nowrap  "
              to={"/gethelp"}
            >
              <Row1Option span={""} color="" text="text-black">
                Live Chat
              </Row1Option>
            </div>
          </div>
          <Row1Option span={"col-span-3"} color="purple">
            Donate
          </Row1Option>
          <li className=" col-span-1 text-[12px] min-w-[fit-content] lg:text-[18px] lg:p-2 flex justify-center  h-full whitespace-nowrap  text-white blue">
            <div
              className=" w-[20px] lg:w-[30px]"
              style={{
                backgroundImage: `url(${search})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            ></div>
          </li>
          <li className="col-span-4  text-[12px] min-w-[fit-content]  lg:text-[18px]  p-2 flex justify-center  h-full whitespace-nowrap bg-[#1B2747] text-white">
            <div
              className="w-[50px] h-[px]"
              style={{
                backgroundImage: `url(${Vector})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            ></div>
            <p>En/Sp</p>
          </li>
        </ul>
      </div>
      <div className="Row2 relative  h-[100px] flex justify-between items-center  sm:grid grid-cols-12 px-2">
        <Link className="p-10 sm:p-0" to="/">
          <div className="Logo  absolute col-span-2 top-0 h-[80px] w-[100px] md:w-[150px] lg:w-[200px] "></div>
        </Link>
        <div>
          <p onClick={() => setHamMenu(!hamMenu)} className="mx-2  sm:hidden">
            Menu
          </p>{" "}
        </div>

        <div className="SearchBarContainer z-40 hidden sm:block sm:col-span-10 lg:col-span-9 h-full    flex items-center justify-center  p-2">
          <ul className="flex gap-4 sm:text-[12px] relative h-full lg:text-[18px] text-black flex justify-between items-center w-full justify-end">
            <NavigationOptions
              navigationitems={[
                "Corporate Partners",
                "Leadership",
                "Mission",
                "Work at Rainn",
              ]}
            >
              About Rainn
            </NavigationOptions>
            <NavigationOptions
              navigationitems={[
                "Counseling",
                "Education & Training",
                "Hotline services",
                "Program assesments",
              ]}
            >
              Counseling & Training
            </NavigationOptions>
            <NavigationOptions
              navigationitems={[
                "Key Terms & phrases",
                "Materials",
                "News",
                "Public Service announcements",
                "Request to speak to a survivor",
                "Statistics",
                "Tips for interviewing survivors",
              ]}
            >
              Press Center
            </NavigationOptions>
            <NavigationOptions
              navigationitems={[
                "Action Center",
                "Campaign to protect child safety",
                "Issues we work on",
                "Laws in your state",
                "Policy Update",
                "Sexual Violence in 6 African Countries ",
              ]}
            >
              Public Policy
            </NavigationOptions>
            <NavigationOptions navigationitems={["Activisim", "Donate","Tell your story","Work opportunities"]}>
              Support Rainn
            </NavigationOptions>
            <NavigationOptions last={"left-[-100%]"} navigationitems={["After Sexual Assualt","Bystander intervention","How to offer support","Laws in your state","Safety and prevention","Survivor stories","Types of sexual violence","Understanding consent","Warning signs","Shop for a survivor"]}>Sexual Violence</NavigationOptions>
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
