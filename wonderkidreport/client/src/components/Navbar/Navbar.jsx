import { Link } from 'react-router-dom'
import React from 'react';

export default function Navbar(props) {
  const { handleLogout } = props;
  return (
    <header>
      <h1>Wonderkid Report</h1>
      {!props.currentUser ? (
        <>
          <div>
          <Link to="/login">Login/Register</Link>
          </div>
        </>
      ) : (
          <div>
      <p>{props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
      )
      }
    </header>
  )
}