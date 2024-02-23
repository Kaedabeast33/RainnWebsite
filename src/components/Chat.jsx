import React from 'react'

const ChatBox = ({text,lr}) => {
  return (
    <div className='w-[100vw] max-w-[100%] relative mt-5'>
    <div className={`w-[40vw] min-w-[300px] absolute ${lr}  h-[50px] bg-slate-300`}>
        <p>{text}</p>
    </div>
    </div>
  )
}

export default ChatBox