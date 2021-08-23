import React, { useEffect, useState } from 'react';
import './App.css';
import Auth  from './Components/Auth/Auth';
import Splash from './Components/Splash'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [sessionToken, setSessionToken] = useState('')
    // useEffect(() => {
      
    //   let stored = localStorage.setItem('token')

    // })

  return (
    <div className="App">
      {
        sessionToken ? <Splash setLoggedIn={setLoggedIn} setSessionToken={setSessionToken}/> :  <Auth  setSessionToken={setSessionToken} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      }
    </div>
  );
}

export default App;
