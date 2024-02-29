import React from 'react'
import Button from './Button'

const Card = ({bg}) => {
  return (
    <>
    <div className='blue grid grid-rows-10 sm:grid-cols-10 sm:grid-rows-1 md:w-[1000px] sm:w-[100vw] min-h-[fit-content] h sm:gap-4 p-4'>
        <div  className='row-span-4 sm:col-span-4 bg-white  flex justify-center items-center'>
          <div style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",}} className='h-[100%] w-[100%]'></div>
        </div>
        <div className='row-span-6 sm:col-span-6 justify-between py-10 flex flex-col gap-2 justify-center'>
            <h2 className='text-white text-[24px] sm:text-[40px]'>Help Via Mobile App.</h2>
            <p className='text-white sm:text-[18px]'>Get support, information, advice, or a referral anywhere, anytime from your smartphone with the RAINN mobile app.</p>
            <Button>App Store</Button>
        </div>
        
    </div>
    </>
  )
}

export default Card