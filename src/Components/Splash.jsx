import React,{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';

const Splash = ({setSessionToken, setLoggedIn}) => {


    return(
        <div>
            <Router>
                <Navbar setSessionToken={setSessionToken} setLoggedIn={setLoggedIn}/>
                <Switch>
                    <Route>
                        
                    </Route>
                    <Route>

                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default Splash