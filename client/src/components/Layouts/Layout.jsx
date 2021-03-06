import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'



export default function Layout(props) {
  return (
    <div className="layoutDiv">
          <Navbar currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} handleLogout={props.handleLogout} />
              <div>{props.children}</div>
          <Footer handleLogout={props.handleLogout} />
      </div>
  )
}


