import './Card.css';
import Card from './Card'
import Card2_Data from './Card2_Data'
import React from 'react'

const Card2 = () => {
  return (
    <div className="card-container">
        <h1 className="project-heading">Skills</h1>
        <div className="project-container">
            {Card2_Data.map((val,ind)=>{
                return(
                <Card key={ind} imgs={val.imgs} title={val.title}
                text={val.text}/>
                )
            })}           
        </div>
    </div>
        
      
    
  )
}

export default Card2
