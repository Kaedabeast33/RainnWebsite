import React from 'react'
import Option from '../components/Option'
import ExplorePanels from '../components/ExplorePanels'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='h-[full] '>
        <section className='Carousel h-[240px] bg-slate-100 flex justify-center'>
            <div className='w-[50%] bg-slate-200'></div>
        </section>
        <section className='HotlineBar bg-slate-400 h-[132px] flex justify-between items-center py-4 px-20'>
            <p className='w-[400px] sm:text-[12px] md:text-[18px]'>Help is available. Call or text the National Assault Hotline. Free. Confidential. Available 24/7.</p>
            <div className='w-[full] flex gap-4'>
               <Button>Call</Button>
               <Link to="/gethelp"><Button>Text</Button></Link>
            </div>
        </section>
        <section className='Options flex flex-col items-center mt-10 gap-[40px]'>
            <div className='' ><p>RAINN is the nation’s largest anti-sexual  violence organization.</p></div>
            <div className='OptionContainer w-[80vw] flex justify-around'>
               <Option title="Helping Survivors"/>
               <Option title="Educating the Public"/>
               <Option title="Improving People Policy" />
               <Option title="Cousneling and Training" />
            </div>
            <div className='Buttons mt-10 flex gap-4' >
                <Button>Learn More</Button>
                <Button>Donate</Button>
            </div>
        </section>
        <section className='Explore grid mt-10 grid-cols-3'>
            <ExplorePanels title="What are the warning signs of child sexual abuse?" className="bg-slate-200"></ExplorePanels>
            <ExplorePanels title="Every 68 seconds, another American is sexually assaulted." className="bg-slate-500"></ExplorePanels>
            <ExplorePanels title="$0.91 of every $1 goes to helping survivors and preventing sexual violence." className="bg-slate-300"></ExplorePanels>
        </section>
    </div>
  )
}

export default HomePage