import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Layout = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Layout