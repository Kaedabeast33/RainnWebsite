import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [hamMenu, setHamMenu] = useState(true)
  return (
    <header className='bg-slate-300 w-full'>
      {hamMenu?
      <>
      <div className='fixed h-[300vh] w-[300vw] opacity-50 bg-black z-40'>
        
      </div>
      <div className='h-[90vh] w-[100vw] p-10 fixed bg-slate-300 opacity-100 z-50'>
      <div className='flex justify-between'>
          <div className='Language'></div>
          <p onClick={() => setHamMenu(!hamMenu)} className='text-2xl'>X</p>
        </div>
      </div>
      </>
      :null
      }
      

        <div className='Rowh-[60px] hidden sm:block'>
            <ul className='flex text-[12px]  lg:text-[18px]  md:texspace-nowrap justify-around'>
               <li className='text-[12px]  lg:text-[18px] p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-400'>Help is available 24/7</li>
                <div className='flex w-full h-full bg-slate-300'>
                   <li className='text-[12px]  lg:text-[18px] p-2 flex justify-center w-full h-full whitespace-nowrap  border-r border-slate-400'>Call 800.656.HOPE (4673)</li>
                   <li className=' text-[12px]  lg:text-[18px] p-2 flex justify-center w-full h-full whitespace-nowrap '>Live Chat</li>
                </div>
               <li className=' text-[12px]  lg:text-[18px] p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-400'>Donate</li>
               <li className='text-[12px]  lg:text-[18px] p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-600 text-white'>Search</li>
               <li className='text-[12px]  lg:text-[18px] p-2 flex justify-center w-full h-full whitespace-nowrap bg-slate-800 text-white'>En/Sp</li>
                
            </ul>
        </div>
        <div className='Row2 h-[80px] flex justify-between items-center  sm:grid grid-cols-12 p-2'>
            <Link className='p-10 sm:p-0' to="/"><div className='Logo col-span-2 flex justify-center items-center h-full text-3xl'>Logo</div></Link>
            <div><p onClick={() => setHamMenu(!hamMenu)} className='mx-2  sm:hidden'>Menu</p>  </div>

            <div className='SearchBarContainer hidden sm:block sm:col-span-10 md:col-span-9  h-full   flex items-center justify-center  p-2'>
            <ul className='flex gap-4 sm:text-[12px] lg:text-[18px] flex justify-between w-full justify-end'>
                <li className='whitespace-nowrap'>About Rainn</li>
                <li className='whitespace-nowrap'>Counseling & Training</li>
                <li className='whitespace-nowrap'>Press Center</li>
                <li className='whitespace-nowrap'>Public Policy</li>
                <li className='whitespace-nowrap'>Support Rainn</li>
                <li className='whitespace-nowrap'>Sexual Violence</li>
                
            </ul>
            </div>
        </div>
        <div className='sm:hidden flex flex-col justify-center items-center'>
          <div className='h-[40px] bg-slate-100 w-full '><p className='text-center text-[24px] text-white'>Help is available 24/7</p></div>
          <div className='h-[40px] bg-slate-100 w-full  flex justify-center whitespace-nowrap'><p className='text-center border-r border-slate-400 text-[16px]  '>Call 800.656.HOPE (4673)</p><p className='text-center text-[16px]'>Donate</p><p className=''>Live Chat</p></div>
        </div>
        
        
       
    </header>
  )
}

export default Header