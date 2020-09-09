import React from 'react';
import "./Contact.css";


class Contact extends React.Component{
  render(){
    return(
        <div class="row">
<div class="bordari">
    <h1>CONTACT INFORMATION</h1><br/>
    <p>
        Phone: +255-748 756 164 <br/>
        <br/>
        Instagram: @pindiPlus <br/>
        <br/>
        Twitter: @pindiPlus <br/>
        <br/>
        Facebook: @pindiPlus
    </p>
</div>
<div class="email">
    <p>Please enter your email to receive regular updates.</p>
    <form class="gmail">
        <input type="email" placeholder="pindi@gmail.com"/> 
        <button>Send</button>
    </form>
        </div>
        </div>
    
 );
 }
 };
 export default Contact;