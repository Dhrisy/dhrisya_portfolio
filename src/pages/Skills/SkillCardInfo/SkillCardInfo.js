import React from 'react'
import "./SkillCardInfo.css"

const SkillCardInfo = ({ heading, skills }) => {
  // console.log(`ddd ${skills}`);
  return (
    <div className='skill-card-info'>
      <div className='skill-card-heading'><h6>{heading}</h6></div>
      <div className='skill-info-card-content'>
        {skills.map((item, index) => {
          // console.log(`eee  ${item.skill}`);
          return <React.Fragment key={`skill-${index}`}>
            <div className='skill-info-card'>
            <p>{item.skill}</p>
            {item.icon !== "" ? <div className='img-container'><img src={item.icon}/></div> : ""}
            </div>
          </React.Fragment>

        })}
      </div>

    </div>
  )
}

export default SkillCardInfo
