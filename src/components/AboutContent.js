import './AboutContent.css'
import React from 'react'
import {Link} from 'react-router-dom'
import pro from '../assests/about1.png'
import pro1 from '../assests/about2.png'
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>I am currently a student in Lovely Professional University,pursuing B.tech(CSE) and a  budding software developer.</p>
        <Link to="/contact">
            <button classname="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
                <img src={pro} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={pro1} className="img" alt="true"/>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default AboutContent
