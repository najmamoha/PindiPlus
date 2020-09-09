import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import "./Header.css"
import logo from './logo.png'
import Home from './Home';
import "./Home.css"

import About from './About';
import "./About.css";

import Contact from './Contact';
import "./Contact.css";



import './Footer.css'
class Header extends React.Component{
  render(){
    return(
	<div>
		<div class = "row">
		<img src={logo} alt ="logo"/>
		<nav class="nav">
		<Link class="links" to='/About'>Home</Link>
		<Link class="links" to='/'>About</Link>
		<Link class="links" to='/Contact'>Contact</Link>
		</nav>
		</div>
		
	</div>
	)
	}
}
    export default Header;









        