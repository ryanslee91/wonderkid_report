import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'


export default function Layout(props) {
  const {handleLogout} = props

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Footer handleLogout={handleLogout} />
    </div>
  )
}
