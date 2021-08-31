import { Link } from 'react-router-dom'
import React from 'react';
import './Navbar.css'

export default function Navbar(props) {
  const { handleLogout } = props;
  return (
    <header className='navBar'>
      <Link id="titleLink" to='/'><h1 id="title">Wonderkid Report</h1></Link>
      {!props.currentUser ? (
        <>
          <div className='loginReg'>
          <Link id="loginLink" to="/login"><h4 id="login">Login/Register</h4></Link>
          </div>
        </>
      ) : (
          <div className='logOutCreate'>
      <p id="greeting">Hello! {props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to='/players/new'>
              <button>Create</button>
              </Link>
            </div>
      )
      }
    </header>
  )
}