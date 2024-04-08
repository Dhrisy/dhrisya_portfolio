import React from 'react'
import "./skill-card.css"
import { motion } from 'framer-motion'

function SkillCardPart({icon, title, description, skills}) {
  return (
    <div className='skill-card-container'>
        
        <motion.div className='skill-card-content'
        initial={{ opacity:0, y: -20 }}
        animate={{ opacity: 1, y:0, 
          transition: {
            staggerChildren:1,
            delayChildren: 1,
            bounceStiffness:200
          }
         }}
        >
        {skills.map((item, index) => {
          // console.log(`eee  ${item.skill}`);
          return <React.Fragment key={`skill-${index}`}>
            <div className='skillCard'>
            <p>{item.skill}</p>
            {item.icon !== "" ? <div className='container-img'><img src={item.icon} alt='icon'/></div> : ""}
            </div>
          </React.Fragment>

        })}
        </motion.div>
      
    </div>
  )
}

export default SkillCardPart
