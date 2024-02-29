import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/icons/Vector.png";
import search from "../assets/icons/MagnifyingGlass.png";
import { motion } from "framer-motion";
import NavigationOptions from "./NavigationOptions";
import Row1Option from "./Row1Option";
import { useGlobalContext } from "../context/GlobalContext";
import LiveChatModal from "../components/LiveChatModal";
import menu from "../assets/icons/Union.png";
import vector2 from "../assets/Vector.png"


const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const {modal,setModal}=useGlobalContext()

  return (
    <header className=" w-full">
       {modal?<LiveChatModal setModal={setModal}></LiveChatModal>
      :null}
      {hamMenu ? (
        <>
          <div onClick={() => setHamMenu(!hamMenu)} className="fixed w-[100vw] h-[100vh]   z-30"></div>
          <div className="h-[90vh] w-[70vw] flex flex-col gap-4 border-black border right-0 p-10 fixed bg-white opacity-100 z-40">
            <div className="flex justify-between">
              <div className="flex">
              <div style={{ backgroundImage: `url(${vector2})`, backgroundSize: "contain", backgroundPosition: "center",backgroundRepeat: "no-repeat", height: "30px", width: "30px" }} className="Language"></div>
              <p className="text-[#8F44D3]">EN/SP</p>
              </div>
              <p onClick={() => setHamMenu(!hamMenu)} className="text-2xl">
                X
              </p>
            </div>
            <div className="grid overflow-hidden grid-cols-3 mx-auto border rounded-lg h-[40px] w-[210px] ">
              <div className="col-span-2">
                <input className="w-full h-full" placeholder="Search"></input>
              </div>
              <div className="buttonhover  purple p-2"><button style={{ backgroundImage: `url(${search})`, backgroundSize: "contain", backgroundPosition: "center",backgroundRepeat: "no-repeat" }} className="h-full w-full"> </button></div>

            </div>
            <div className="flex flex-col gap-10 mt-10">
              <NavigationOptions>About Rainn</NavigationOptions>
              <NavigationOptions>Counseling & Training</NavigationOptions>
              <NavigationOptions>Press Center</NavigationOptions>
              <NavigationOptions>Public Policy</NavigationOptions>
              <NavigationOptions>Support Rainn</NavigationOptions>
              <NavigationOptions>Sexual Violence</NavigationOptions>
            </div>
          </div>
        </>
      ) : null}

      <div className="Row w-full hidden sm:block ">
        <ul className="sm:grid grid-cols-24 text-[12px] w-[100vw]  lg:text-[18px]  md:texspace-nowrap justify-around">
          <Row1Option span={"col-span-5"} color="darkblue">
            Help is available 24/7
          </Row1Option>
          <div className="grid grid-cols-4 col-span-11  h-full  lavender">
            <div
              className="text-[12px] col-span-3  lg:text-[18px] p-2  flex justify-center  h-full whitespace-nowrap  border-r border-slate-400"
              to={"/gethelp"}
            >
              <Row1Option span={""} color="" text="text-black">
                Call 800.656.HOPE (4673)
              </Row1Option>
            </div>
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
      <div className="Row2 relative  h-[80px] sm:h-[100px] flex justify-between items-center  sm:grid grid-cols-12 px-2">
        <Link className=" sm:p-0" to="/">
          <div className="Logo  absolute col-span-2 top-0 left-4 h-[80px] w-[100px] md:w-[150px] lg:w-[200px] "></div>
        </Link>
        <div>
          <p onClick={() => setHamMenu(!hamMenu)} style={{backgroundImage: `url(${menu})`}} className="mx-4 w-[36px] h-[24px] text-[#11497C] text-[36px]  sm:hidden">
           
          </p>
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
        <div className="h-[36px]  w-full ">
          <p className="text-center darkblue text-[24px] text-white italic">
            Help is available 24/7
          </p>
        </div>
        <div className="h-[40px] w-full lavender  grid grid-cols-6 justify-around items-center whitespace-nowrap">
          <p className="text-center w-full col-span-4 border-r px-2 border-slate-400 text-[16px]  ">
            Call 800.656.HOPE (4673)
          </p>
        
          <p onClick={()=>setModal(true)} className="text-center w-full col-span-2 text-[16px]">Live Chat</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
