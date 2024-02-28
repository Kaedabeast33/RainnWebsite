import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import GetHelp from './pages/GetHelp'
import Chat from './pages/Chat'
import {hotjar} from "react-hotjar"
import { useEffect } from 'react'


function App() {
  
  useEffect(() => {
    hotjar.initialize(3882563, 6);
    }, []);
  return (
    <div className='w-[100vw]'>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="gethelp" element={<GetHelp></GetHelp>}></Route>
        <Route path="chat" element={<Chat></Chat>}></Route>
      </Route>
        
     

    </Routes>
    </div>
  )
}

export default App
