import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>Wonderkid Report</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
   <Link to='/login'>Login/Register</Link>
        )}
        {currentUser && (
          <div>
            
          </div>
        )}
          {props.children}
        </header>
    </div>
  )
}
