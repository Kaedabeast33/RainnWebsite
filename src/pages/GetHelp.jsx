import React from 'react'
import Button from '../components/Button'
import SmallCard from '../components/SmallCard'
import Card from '../components/Card'
import Stories from '../components/Stories'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import { useState } from 'react'
import group from '../assets/icons/Group.png'

import chatbox from "../assets/icons/chatbox.png"
import location from '../assets/icons/saskia_transparent.png'
import WarningBanner from '../components/WarningBanner'
import carousel from "../assets/carousel.png"
import smallcard from "../assets/smallcard.png"
import smallcard2 from "../assets/smallcard2.png"
import mobilead from "../assets/mobilead.png"
import Christian from "../assets/survivors/Christian.png"
import Kai from "../assets/survivors/Kai.png"
import Theresa from "../assets/survivors/Theresa.png"
import HelpOption from '../components/HelpOption'
import message2 from '../assets/icons/message2.png'
import message from "../assets/icons/message.png"
import chatboxback from "../assets/icons/chatboxback.png"
import group2 from "../assets/icons/Group2.png"

import { useGlobalContext } from '../context/GlobalContext'

const GetHelp = () => {
  const {modal,setModal}=useGlobalContext()
  const[navigateStory,setNavigateStory]=useState(0)
  const onNavigateClickRight=()=>{
    console.log(navigateStory)
    if(navigateStory===2){
      setNavigateStory(0)
    }else{
      setNavigateStory(navigateStory+1)
    }
    
  }
  const onNavigateSotryClickLeft=()=>{
    console.log(navigateStory)
    if(navigateStory===0){
      setNavigateStory(2)
    }else{
      setNavigateStory(navigateStory-1)
    }
  }
  return (
    <div className='overflow-hidden'>
    <WarningBanner/>
      <section style={{backgroundImage:`url(${carousel})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}} className='Jumbotron relative w-[100vw] h-[400px] bg-slate-100 flex flex-col items-center gap-4'>
        <div className='absolute top-0 h-full w-full bg-black opacity-50'></div>
      <h2 className='text-center text-white text-[48px] z-40'>Help is Available</h2>
        <div className='z-40 h-full flex gap-10 justify-center items-center'>
          <HelpOption pic1={group} pic2={group2}>Call</HelpOption>
          <HelpOption onClick={()=>setModal(true)} pic1={message} pic2={message2}>Text</HelpOption>
          
            <HelpOption pic1={chatbox} pic2={chatboxback}>Chat Bot</HelpOption>
            
        </div>
        
      </section>
      <section className='InfoSection flex sm:flex-row flex-col items-center justify-center p-4 gap-4'>
        <SmallCard link="/gethelp" bg={smallcard} title="What is the Online Hotline?" button="Learn More" description="Whether you’re looking for support, information, advice, or a referral, our trained support specialists are ready to help." ></SmallCard>
        <SmallCard link="/gethelp" bg={smallcard2} title="Help Over the Phone." button="Call Now" description="Call the National Sexual Assault Hotline to talk to a trained staff member from your local sexual assault service provider." ></SmallCard>
        <SmallCard  onClick={()=>setModal(true)}  bg={smallcard} title="Help Via Live Chat" button="Chat Now" description="Chat with one on one with a trained staff member. 100% confidential, 100% safe." ></SmallCard>
        <SmallCard link="/gethelp" bg={smallcard2} title="Help Via Chat Bot." button="Meet Iris" description="Ask Iris, the new RAINN chatbot, for resources, referrals and information." ></SmallCard>
        
      </section>
      <section className='flex flex-col items-center gap-4 justify-center'>
      <h2 className='text-[14px] sm:text-[36px] text-center my-4 w-[60%] min-w-[500px]'>We promise you a safe, free, and confidential experience. Click to learn more about how we protect your privacy. </h2>
      <Button className={"my-4"}>Learn More</Button>
      </section>
      <section className='MobileApp my-4 flex justify-center'>
        <Card bg={mobilead}></Card>
      </section>
      <section className='Stories px-10   '>
        <h3 className='mx-10 font-bold text-[36px] '>Read Survivor Stories</h3>
        <p className='mx-10'>Read how RAINN has helped survivors nation-wide</p>
        
        <div  className='relative'>
        <div className='sm:hidden absolute w-[100vw] h-[100px] bottom-[50%] translate-y-[50%] flex justify-between items-center z-40'>
            <div onClick={onNavigateSotryClickLeft}>$</div>
            <div onClick={onNavigateClickRight}>$</div>
          </div>
          <motion.div initial={{translateX:"0"}} animate={{translateX:`${-navigateStory}00%`}} className="sm:hidden flex py-4 [w-300px] sm:justify-center relative sm:gap-4">
          <Stories bg={Christian} name="Christian's Story"></Stories>
          <Stories bg={Kai} name="Kai's Story"></Stories>
          <Stories bg={Theresa} name="Theresa's Story"></Stories>
          </motion.div>
          <div className="hidden sm:flex py-4 [w-300px] sm:justify-center relative sm:gap-4">
          <Stories bg={Christian} name="Christian's Story"></Stories>
          <Stories bg={Kai} name="Kai's Story"></Stories>
          <Stories bg={Theresa} name="Theresa's Story"></Stories>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetHelp