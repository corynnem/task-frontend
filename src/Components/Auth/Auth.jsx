import React, { useState } from 'react';
import Register from './Register'
import Login from './Login'
import styles from '../css/styles'

const Auth = ({ setLoggedIn, setSessionToken }) => {
   const [loggingIn, setLoggingIn] = useState(false)

    const toggle = () => {
        setLoggingIn(!loggingIn)
    }


    return(
        <div>
            <h2 style={{marginTop: '10vh'}}>Welcome, register an account to start creating Teams, Projects, and Tasks</h2>
        {   
             loggingIn ?  <Login setLoggedIn={setLoggedIn} setSessionToken={setSessionToken}/> : <Register/> 
        }
            
           
            <button style={styles.authButton} onClick={toggle}>{ loggingIn ? 'Register' : 'Log in' }</button>
        </div>
    )
}

export default Auth