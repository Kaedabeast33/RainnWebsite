import React from 'react'
import Button from '../components/Button'
import SmallCard from '../components/SmallCard'
import Card from '../components/Card'
import Stories from '../components/Stories'
import { Link } from 'react-router-dom'

const GetHelp = () => {
  return (
    <>
      <section className='WarningBanner w-[100vw] h-[130px] bg-slate-500'>
        <h3 className='text-white'>Your safety is important. If you are in immediate danger, call 911.</h3>
      </section>
      <section className='Jumbotron w-[100vw] h-[400px] bg-slate-100 flex flex-col items-center gap-4'>
      <h2 className='text-center text-[48px]'>Help is Available</h2>
        <div className='h-full flex gap-4 justify-center items-center'>
          <div className='HelpOption flex flex-col items-center'>
            <div className='Circle bg-slate-200 h-[150px] w-[150px] rounded-full'></div>
            <h4>Call</h4>
          </div>
          <div className='HelpOption flex flex-col items-center'>
            <div className='Circle bg-slate-200 h-[150px] w-[150px] rounded-full'></div>
            <h4>Text</h4>
          </div>
          <Link to="/chat"><div className='HelpOption flex flex-col items-center'>
            <div className='Circle bg-slate-200 h-[150px] w-[150px] rounded-full'></div>
            <h4>Chatbot</h4>
          </div></Link>
        </div>
        
      </section>
      <section className='InfoSection flex justify-center p-4 gap-4'>
        <SmallCard title="What is the Online Hotline?" button="Learn More" description="Whether you’re looking for support, information, advice, or a referral, our trained support specialists are ready to help." ></SmallCard>
        <SmallCard title="Help Over the Phone." button="Call Now" description="Call the National Sexual Assault Hotline to talk to a trained staff member from your local sexual assault service provider." ></SmallCard>
        <SmallCard title="Help Via Live Chat" button="Chat Now" description="Chat with one on one with a trained staff member. 100% confidential, 100% safe." ></SmallCard>
        <SmallCard title="Help Via Chat Bot." button="Meet Iris" description="Ask Iris, the new RAINN chatbot, for resources, referrals and information." ></SmallCard>
        
      </section>
      <section className='flex flex-col items-center gap-4 justify-center'>
      <h2 className='text-[36px] w-[50%] min-w-[300px]'>We promise you a safe, free, and confidential experience. Click to learn more about how we protect your privacy. </h2>
      <Button>Learn More</Button>
      </section>
      <section className='MobileApp flex justify-center'>
        <Card></Card>
      </section>
      <section className='Stories  '>
        <h3>Read Survivor Stories</h3>
        <p>Read how RAINN has helped survivors nation-wide</p>
        <div className='flex justify-center gap-4'>
        <Stories name="Amanda's Story"></Stories>
        <Stories name="Ricks's Story"></Stories>
        <Stories name="Cindy's Story"></Stories>
        </div>
      </section>
    </>
  )
}

export default GetHelp