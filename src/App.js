<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//importing pages
import Home from './Components/Home.js';

export default class App extends Component{
  render(){
  return (
    <div>
      <Home/>
    </div>
  );
}
}
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> parent of 2da2edb... pushing our work
