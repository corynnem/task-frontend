import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import styles from "../css/styles";
import validation from './Validate'


const Register = () => {
    
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState('')
    const [key, setKey] = useState('')


    const register = async() => {
       let response = await fetch(`http://localhost:8070/8738/register`, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                password,
                position,
                key
            })
        })
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

        let json = await response.json()
         return json.message === 'email already in use' ? alert(json.message) : json.message === 'user registered' ? alert('Login to access your account!') : ''

       
    }


    const validate = (e) => {
      e.preventDefault()
      let validated = validation.registerValidate()
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
          id="firstName"
          label="First Name"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="position"
          label="Position"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setPosition(e.target.value)}
        />
        <TextField
          id="key"
          label="Key"
          variant="filled"
          style={styles.registerform}
          onChange={(e) => setKey(e.target.value)}
        />
         <input type="submit" style={styles.submitbutton}/>
      </form>
      
        
    </div>
  );
};

export default Register;
