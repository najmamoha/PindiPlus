import React from 'react';
import "./Home.css";

import computer from "./computer.jpg"
import mission from "./mission.jpg"

class Home extends React.Component{
  render(){
    return(
        <div>
          <img class="computer" src={computer} alt="computer"/>
      <div class="boder">
        <div class="pindi">
          <p><b>PindiPlus</b> is an initiative to help the upcoming programmers with the one on one coding sessions.
             PindiPlus focuses on providing the most efficient one on one coding sessions as the learning wants to be simple.
             We will help programmers build up concepts in different programming languages that include 
             C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm. </p>
           <br/>
           <br/>
           <h4>Our Product/ Service:</h4>

           <ul>
              <li>Course</li>
                <ul className="inner-list">
                  <li>Frontend Development</li>
                  <li> Backend Development</li>
                  <li>Fullstack Development</li>
                </ul>
              <li>Corporate Training</li>
              <li> Software Development</li>
            </ul>

        </div>
        <div class="pindi">
        <img  class="mission" src={mission} alt="mission"/>
        <br/>
          <h3>OUR MISSION</h3>
          <p>To create ageneration of young programmers who are creative and innovative enough,
             ready to create solution(s) that is
              responsive to the needs of a changing society using technology and programming.</p>
              

        </div>
        <div class="pindi">
          <h3>OUR VISSION</h3>
          <p>To be the center of exellence in programming treaning in Tanzania.</p>
          <h4>Our Core Values</h4> 
          <p><b>Professionalism</b><br/>
          Treating our student and all our stakeholders with respect
           regardless the abilities and gender alows us to demonstrate
            the Professionalism that is expected from them <br/>
            <h3>Inovativeness and creativity</h3><br/>
            We foster an environment that nutures inovation and creativity,
            by encouraging our student to take cautius risks and precautions while thinking on how to approach things.<br/>
            <h3>Team Work</h3><br/>We are striving to make all
             our stakeholders understands how important it is to embrace diversity,
             working in teams and to understand others dispite there differences.
            </p>   
        </div>
      </div>
      </div>
    )
  }
}

export default Home;
