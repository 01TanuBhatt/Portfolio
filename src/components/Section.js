import './Section.css'
import React from 'react'
import IntroImg from '../assests/portfolio.png'
import { Link } from 'react-router-dom'
const Section = () => {
  return (
    <div className="section">
      <div className="section_1">
        <img className="into-img" src={IntroImg} alt={IntroImg}/>
        </div>
        <div className="content">
            <p>Hello, I'M TANU BHATT AND I'M A STUDENT</p>
            <h1>Budding Developer</h1>
            <div>
                <Link to='/project' className="btn">Skills</Link>
                <Link to='/contact' className="btn btn-light">Contact</Link>
                
            </div>
        </div>
    </div>
  )
}

export default Section