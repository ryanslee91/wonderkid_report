import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const {currentUser, handleLogout} = props
  return (
    <div>
      <header>
        <h1>Wonderkid Report</h1>
        {
          currentUser ? (
            <div>
              <p>
                {currentUser.username}
                <button onClick={handleLogout}>Logout</button>
              </p>
              </div>
          ) : (
              <Link to='/login'>Login/Register</Link>
          )
        }
        <hr />
        {currentUser && (
          <div>
            <Link to='/leagues'>
              Leagues
              </Link>
          </div>
        )}
        {props.children}
      </header>
    </div>
  )
}
