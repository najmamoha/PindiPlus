import React from 'react';
import ReactDOM from 'react-dom';



import Header from'./Header';
import Footer from './Footer'

class App extends React.Component{
  render(){
    return(
    <div>
       <Footer/>


</div>
    )
  }
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

