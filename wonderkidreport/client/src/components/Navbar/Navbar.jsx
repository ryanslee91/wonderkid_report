import { Link } from 'react-router-dom'
import React from 'react';

export default function Navbar(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
    <h1>Wonderkid Report</h1>
    {currentUser ? (
      <div>
        <p>{currentUser.username}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <Link to="/login">Login/Register</Link>
    )}
    <hr />
    {currentUser && (
      <div>
  
      </div>
    )}
    {props.children}
  </header>
  )
}
