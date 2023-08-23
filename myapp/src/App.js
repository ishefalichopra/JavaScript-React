import './App.css';
import { useState } from 'react';
import UserList from './components/UserList/userList';
import Login from './components/Login/Login';


function App() {

  const [isLoggedIn, changeIsLoggedIn] = useState(false);
  console.log("Inside App component");


  function onLogin(){
    changeIsLoggedIn(true);
  }

  function onLogout(){
    changeIsLoggedIn(false);
  }


  return <div  >
    {
      (isLoggedIn) ? <UserList onLogout={onLogout} /> : <Login onLogin={onLogin} />
    }

  </div>
}

export default App;
