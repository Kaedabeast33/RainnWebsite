import React from 'react'

import ChatBox from '../components/Chat'
import Button from '../components/Button'

const Chat = () => {
  return (
    <div className='relative'>
        <section className='WarningBanner w-[100vw] h-[130px] bg-slate-500'>
        <h3 className='text-white'>Your safety is important. If you are in immediate danger, call 911.</h3>
      </section>
      <section className="LiveChat flex flex-col gap-10">
        <h1>Live Chat</h1>
        <ChatBox lr="left-10" text={"What should I call you?"}></ChatBox>
        <ChatBox lr="right-10" text={"What should I call you?"}></ChatBox>
        <ChatBox lr="left-10" text={"What should I call you?"}></ChatBox>
        <ChatBox lr="right-10" text={"What should I call you?"}></ChatBox>
        <ChatBox lr="left-10" text={"What should I call you?"}></ChatBox>
        <ChatBox lr="right-10" text={"What should I call you?"}></ChatBox>
        <ChatBox lr="left-10" text={"What should I call you?"}></ChatBox>
      </section>
      <section className='Input w-[100vw] absolute bottom-0 p-10'>
        <div className='flex gap-10'>
        <input type="text" className='w-[70vw] min-w-[300px] h-[40px] bg-slate-300' />
        <Button > Send</Button>
        </div>
      </section>
      <section className='h-[200px]'></section>
      
    </div>
  )
}

export default Chat