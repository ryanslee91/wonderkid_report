import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import Layout from './components/Layouts/Layout';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
