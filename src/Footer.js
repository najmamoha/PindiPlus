import React from 'react';

import Home from './Home';
import "./Home.css"

import About from './About';
import "./About.css";

import Contact from './Contact';
import "./Contact.css";

import Header from './Header';

import './Footer.css'


import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class Footer extends React.Component{
  render(){
    return(
        <Router>
        

            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/About">
                    <About/>
                    </Route>

                    <Route path="/Contact">
                        <Contact/>
                    </Route>

                    
            </Switch> 

            <div class="footer">
            <div class="column">
            <Link class="links" to='/About'>Home</Link><br/>
            
                <br/>
                <p>
                  Buza Kanisani,<br/>
                  Kanisani Street, Block 22 <br/>
                  Dar-Es-Salaam, Tanzania  
                </p>
            </div>
            <br/>
            <div class="column">
            <Link class="links" to='/'>About</Link> <br/>
                <br/> <br/>
                <Link class="links" to='/Contact'>Contact</Link>
            </div>
        
        </div>
          
        </Router>
    );
  }
};
export default Footer;