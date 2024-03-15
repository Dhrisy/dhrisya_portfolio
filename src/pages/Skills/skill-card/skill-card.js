import React from 'react'
import "./skill-card.css"

function SkillCardPart({icon, title, description, skills}) {
  return (
    <div className='skill-card-container'>
        
        <div className='skill-card-content'>
        {skills.map((item, index) => {
          // console.log(`eee  ${item.skill}`);
          return <React.Fragment key={`skill-${index}`}>
            <div className='skillCard'>
            <p>{item.skill}</p>
            {item.icon !== "" ? <div className='container-img'><img src={item.icon} alt='icon'/></div> : ""}
            </div>
          </React.Fragment>

        })}
        </div>
      
    </div>
  )
}

export default SkillCardPart
