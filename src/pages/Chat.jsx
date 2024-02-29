import React,{useRef, useState} from 'react'

import ChatBox from '../components/Chat'
import Button from '../components/Button'
import WarningBanner from '../components/WarningBanner'

const Chat = () => {
  const input = useRef(null)

  const [chats, setChats]=useState([{text:"What should I call you?",lr:"left-60"},
  {text:"Jessica",lr:"right-60"},
  {text:"Jessica, are you in a place where you can talk freely?",lr:"left-60"},
  {text:"Yes.",lr:"right-60"},
  {text:"How can I help you today?",lr:"left-60"},
  {text:"I think I’ve been assaulted. I don’t know what to do.",lr:"right-60"},])
  
  return (
    <div className='relative '>
      
       <WarningBanner/>
       <div className='flex purple w-[100vw] h-[60px] gap-4 items-center px-10'><div className='w-[25px] h-[23px] shadow-md bg-[#90D392] pulse rounded-full '></div><h1 className='text-white font-semibold text-[32px]'>Live Chat</h1></div>
      <section className="LiveChat h-[100vh] p-10 pb-20 overflow-x-auto  flex flex-col gap-[40px] sm:gap-[100px]">
        
       
       {chats.map((chat)=> <ChatBox text={chat.text} lr={chat.lr}/>) }
       <ChatBox text="..." lr={"left-60"} />
      </section>
      <section className='Input sticky  flex justify-center items-center bg-[#E9E4F0] h-[120px]    bottom-0 '>
        <div className='flex w-[100vw] justify-center grid grid-cols-12 items-center gap-10'>
          <div className='col-span-2 w-full'></div>
          <input ref={input} type="text" placeholder='Start typing...' className='shadow-inner  shadow-[#717171] p-2 rounded-lg col-span-6  h-[60px] bg-[#FFFFFF]' />
          
          <Button className={"col-span-2"} onclick={() => {setChats(input.current.value?[...chats,{text:input.current.value,lr:"right-60"}]:[...chats])
                                input.current.value="" 
                                }
        } > Send</Button>
        </div>
      </section>
      {/* <section className='h-[200px]'></section> */}
      
    </div>
  )
}

export default Chat