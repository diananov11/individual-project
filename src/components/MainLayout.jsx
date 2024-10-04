import React from 'react'
import NavbarMenu from './NavbarMenu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <NavbarMenu />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
