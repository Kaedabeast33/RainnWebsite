import React,{useRef, useState} from 'react'

import ChatBox from '../components/Chat'
import Button from '../components/Button'
import WarningBanner from '../components/WarningBanner'

const Chat = () => {
  const input = useRef(null)

  const [chats, setChats]=useState([{text:"What should I call you?",lr:"left-40"},
  {text:"Jessica",lr:"right-40"},
  {text:"Jessica, are you in a place where you can talk freely?",lr:"left-40"},
  {text:"Yes.",lr:"right-40"},
  {text:"How can I help you today?",lr:"left-40"},
  {text:"I think I’ve been assaulted. I don’t know what to do.",lr:"right-40"},])
  
  return (
    <div className='relative'>
       <WarningBanner/>
      <section className="LiveChat flex flex-col gap-[80px]">
        <div className='flex purple w-[100vw] h-[60px] gap-4 items-center px-10'><div className='w-[25px] h-[23px] shadow-md bg-[#90D392] pulse rounded-full '></div><h1 className='text-white font-semibold text-[32px]'>Live Chat</h1></div>
        
       {chats.map((chat)=> <ChatBox text={chat.text} lr={chat.lr}/>) }
       <ChatBox text="..." lr={"left-40"} />
      </section>
      <section className='Input flex justify-center items-center bg-[#E9E4F0] h-[120px] w-[100vw] absolute bottom-0 sm:p-10'>
        <div className='flex w-full justify-center items-center gap-10'>
        <input ref={input} type="text" placeholder='Start typing...' className='shadow-inner  shadow-[#717171] p-2 rounded-lg w-[90vw]  h-[60px] bg-[#FFFFFF]' />
        <Button onclick={() => {setChats(input.current.value?[...chats,{text:input.current.value,lr:"right-40"}]:[...chats])
                               input.current.value="" 
                               }
      } > Send</Button>
        </div>
      </section>
      <section className='h-[200px]'></section>
      
    </div>
  )
}

export default Chat