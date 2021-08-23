import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import styles from "../css/styles";
import validation from './Validate'


const Login = ({setLoggedIn, setSessionToken}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const setToken = (token) => {
        if(token.token !== undefined) {
            setLoggedIn(true)
            setSessionToken(token.token)
            return localStorage.setItem('token', token.token)
        }
    }


    const register = async() => {
       let response = await fetch(`http://localhost:8070/8738/login`, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email,
                password,
            })
        })
        setEmail('')
        setPassword('')


        let json = await response.json()
         return json.message === 'login failed' ? alert(json.message) : json.token !== undefined ? setToken(json) : ''

       
    }


    const validate = (e) => {
      e.preventDefault()
      let validated = validation.loginValidate()
      return validated ? register(e) : ''
    }


  return (
    <div >
      <form autoComplete="off" style={styles.flexcol} onSubmit={(e) => validate(e)}>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setPassword(e.target.value)}
        />
         <button type="submit" style={styles.submitbutton}>Submit</button>
      </form>
      
        
    </div>
  );
};

export default Login;