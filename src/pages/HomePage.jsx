import React, { useState } from "react";
import Option from "../components/Option";
import ExplorePanels from "../components/ExplorePanels";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import survivors from "../assets/icons/survivors.png";
import consulting from "../assets/icons/consulting.png";
import education from "../assets/icons/education.png";
import policy from "../assets/icons/policy.png";
import clocks from "../assets/backgroundimages/clocks.png";
import eye from "../assets/backgroundimages/eye.png";
import moneytree from "../assets/backgroundimages/moneytree.png";
import LiveChatModal from "../components/LiveChatModal";
import { useGlobalContext } from "../context/GlobalContext";

const HomePage = () => {
  const { modal, setModal } = useGlobalContext();
  return (
    <div className="h-[full] ">
      <section className="Carousel relative h-[160px] sm:h-[250px] bg-slate-800 w-full flex justify-center">
        <div className="bgcarousel  w-full   relative">
          <p className="text-white mx-[20px] -[10px] z-30 text-[20px] sm:text-[40px] font-bold absolute top-10 right-10">
            We are here to help
          </p>
        </div>
        <div className="absolute bottom-4 right-10 h-[50px] w-[30%] z-30 ">
          <Link to="/gethelp">
            <p className="buttonhover rounded purple text-white h-[40px] w-[125px] sm:h-full sm:w-[200px] flex justify-center items-center">
              Get Support
            </p>
          </Link>
        </div>
        <div className="absolute opacity-30 bg-[#27313D]  h-full w-[100vw] "></div>
      </section>
      <section className="HotlineBar blue h-[136px] justify-center items-center gap-4 flex flex-col sm:grid grid-cols-2  ">
        <p className="px-5 text-[12px] text-center md:text-[18px] sm:w-[400px] mx-auto font-bold text-white">
          Call or text the National Assault Hotline. Free. Confidential.
          Available 24/7.
        </p>
        <div className="w-full flex justify-around px-4 ">
          <div className="">
            <Button className={"hidden sm:block"} title="">
              800.656.HOPE
            </Button>
            <Button className={"block sm:hidden"} title="">
              Call
            </Button>
          </div>
          <div onClick={() => setModal(true)}>
            <Button>Live Chat</Button>
          </div>
        </div>
      </section>
      <section className="Options flex flex-col items-center mt-10 gap-[40px]">
        <div className="">
          <p className="text-[18px] sm:text-[24px] text-center font-bold">
            RAINN is the nation’s largest anti-sexual violence organization.
          </p>
        </div>
        <div className="OptionContainer hidden sm:flex w-[80vw] max-w-[800px] justify-around">
          <Option icon={survivors} title="Helping Survivors" />
          <Option icon={education} title="Educating the Public" />
          <Option icon={policy} title="Improving Public Policy" />
          <Option icon={consulting} title="Counseling and Training" />
        </div>
        <div className="OptionContainer flex sm:hidden w-[80vw] justify-around">
          <div>
            <Option icon={survivors} title="Helping Survivors" />
            <Option icon={education} title="Educating the Public" />
          </div>
          <div>
            <Option icon={policy} title="Improving People Policy" />
            <Option icon={consulting} title="Cousneling and Training" />
          </div>
        </div>
        <div className="Buttons sm:mt-10 flex gap-4">
          <Button>Learn More</Button>
          <Button>Donate</Button>
        </div>
      </section>
      <section className="Explore overflow-hidden  flex flex-col w-[100vw] gap-4 items-center justify-center sm:p-10  sm:grid mt-10 sm:grid-cols-3">
        <ExplorePanels
          overlay="#11497C"
          icon={eye}
          title="What are the warning signs of child sexual abuse?"
          className=""
        >
          Read More
        </ExplorePanels>
        <ExplorePanels
          overlay="#54396C"
          icon={clocks}
          title="Every 68 seconds, another American is sexually assaulted."
          className=""
        >
          More Stats
        </ExplorePanels>
        <ExplorePanels
          overlay="#11497C"
          icon={moneytree}
          title="$0.91 of every $1 goes to helping survivors and preventing sexual violence."
          className=""
        >
          Donate
        </ExplorePanels>
      </section>
    </div>
  );
};

export default HomePage;
