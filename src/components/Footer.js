import './Footer.css'
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin,FaFacebook,FaTwitter} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div classsName="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff",marginRight:"2rem"}}/>
                <div>
              <p>Lovely Professional University.</p>
              <p>Punjab,India.</p>
            </div>
            </div>
            
            <div className="phone">
            <h4><FaPhone size={20} style={{color: "#fff",marginRight:"2rem"}}/>1122334455</h4>
             
            </div>
            <div className="Email">
            <h4><FaMailBulk size={20} style={{color: "#fff",marginRight:"2rem"}}/>tanubhatt340@gmail.com</h4>
             
            </div>
            </div>
            <div classsName="right">
                <h4>About me</h4>
                <p>This is Tanu Bhatt.I am an Student,aspiring to become Data Analyst </p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                </div>
            </div>
        
      </div>
    </div>
  )
}

export default Footer
