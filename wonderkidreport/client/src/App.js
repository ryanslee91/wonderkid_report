import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import Layout from './layouts/Layout';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, []);


  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>

        </Switch>
  </Layout>
    </div>
  );
}

export default App;
