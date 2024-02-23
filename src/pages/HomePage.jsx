import React from 'react'
import Option from '../components/Option'
import ExplorePanels from '../components/ExplorePanels'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='h-[full] '>
        <section className='Carousel relative h-[240px] bg-slate-100 flex justify-center'>
            <div className='w-full sm:w-[50%] bg-slate-200'></div>
            <div className='absolute bottom-10 right-10 h-[50px] w-[30%] bg-slate-400' ><p className='text-white h-full flex justify-center items-center'>Learn More</p></div>
        </section>
        <section className='HotlineBar bg-slate-400 h-[132px] grid grid-cols-2 py-4 sm:px-20'>
            <p className='px-5 text-[14px] md:text-[18px]'>Help is available. Call or text the National Assault Hotline. Free. Confidential. Available 24/7.</p>
            <div className='w-[full] flex gap-4'>
                <div className='w-[200px]'><Button>Call</Button></div>
               <Link to="/gethelp"><Button>Text</Button></Link>
            </div>
        </section>
        <section className='Options flex flex-col items-center mt-10 gap-[40px]'>
            <div className='' ><p>RAINN is the nation’s largest anti-sexual  violence organization.</p></div>
            <div className='OptionContainer hidden sm:flex w-[80vw] justify-around'>
               <Option title="Helping Survivors"/>
               <Option title="Educating the Public"/>
               <Option title="Improving People Policy" />
               <Option title="Cousneling and Training" />
            </div>
            <div className='OptionContainer flex sm:hidden w-[80vw] justify-around'>
                <div>
               <Option title="Helping Survivors"/>
               <Option title="Educating the Public"/>
               </div>
               <div>
               <Option title="Improving People Policy" />
               <Option title="Cousneling and Training" />
               </div>
            </div>
            <div className='Buttons mt-10 flex gap-4' >
                <Button>Learn More</Button>
                <Button>Donate</Button>
            </div>
        </section>
        <section className='Explore flex flex-col sm:grid mt-10 sm:grid-cols-3'>
            <ExplorePanels title="What are the warning signs of child sexual abuse?" className="bg-slate-200"></ExplorePanels>
            <ExplorePanels title="Every 68 seconds, another American is sexually assaulted." className="bg-slate-500"></ExplorePanels>
            <ExplorePanels title="$0.91 of every $1 goes to helping survivors and preventing sexual violence." className="bg-slate-300"></ExplorePanels>
        </section>
    </div>
  )
}

export default HomePage