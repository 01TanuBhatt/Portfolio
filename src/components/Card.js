import './Card.css';
import React from 'react'

const Card = (props) => {
  return (
    <div className="project-card">
      <img src = {props.imgs} alt="image"/>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
      <p>{props.text}</p>
      
     </div>
    </div>
    
      
  )
}

export default Card
