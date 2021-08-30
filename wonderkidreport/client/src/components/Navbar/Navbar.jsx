import { Link } from 'react-router-dom'
import React from 'react';

export default function Navbar(props) {
  const { handleLogout } = props;
  return (
    <header>
      <Link to='/'><h1>Wonderkid Report</h1></Link>
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
            <Link to='/players/new'>
              <button>Create</button>
              </Link>
            </div>
      )
      }
    </header>
  )
}