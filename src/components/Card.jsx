import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    <>
    <div className='grid grid-cols-10 md:w-[1000px] sm:w-[100vw] h-[400px] gap-4 p-4'>
        <div className='col-span-4 bg-slate-400'></div>
        <div className='col-span-6 '>
            <h2>Help Via Mobile App.</h2>
            <p>Get support, information, advice, or a referral anywhere, anytime from your smartphone with the RAINN mobile app.</p>
            <Button>App Store</Button>
        </div>
        
    </div>
    </>
  )
}

export default Card