import React from 'react';
import "./About.css";

import work from "./work.jpg"
import front from "./front.png"
import back from "./back.png"
import full from "./full.png"


class About extends React.Component{
  render(){
    return(
      <div>
        <img class="image" src={work} alt="work"/>
      <div class="bodery">
        <div class="bigy">
          <p><h1>DID YOU KNOW ?</h1>
             
          </p>
        </div>
        <div class="pindy">
          <p><b>PindiPlus</b> is a programming company established in 2015.
           It is an online platform designed to help it's users or upcoming programmers with a one coding sessions.
           PindiPlus offers both theoretical and practical experiences.
           PindiPlus is a non-govermental organisation, with PindiPlus you will be able to earn a proffessional certificate after the co,pletion of the course.
           But if there's any job available PindiPlus will hook you up.</p>
      <br/>
       
        </div>
        </div>
        <div class="row">
          <div class="col">
          <img  class="mission" src={front} alt="front"/>
          <h3>Frontend Development</h3>
          <p>To create ageneration of young programmers who are creative and innovative enough,
             ready to create solution(s) that is
              responsive to the needs of a changing society using technology and programming.</p>
          </div>
          <div class="col">
          <img  class="mission" src={back} alt="back"/>
          <h3>Backend Development</h3>
          <p>To create ageneration of young programmers who are creative and innovative enough,
             ready to create solution(s) that is
              responsive to the needs of a changing society using technology and programming.</p>
          </div>
          <div class="col">
          <img  class="mission" src={full} alt="full"/>
          <h3>Fullstack Development</h3>
          <p>To create ageneration of young programmers who are creative and innovative enough,
             ready to create solution(s) that is
              responsive to the needs of a changing society using technology and programming.</p>
          </div>
        </div>
        </div>
        
        )
        }
        }
export default About;