import React, { useState } from 'react'
import "./Skills.css"
import { SKILLS } from '../../utils/data'
import { motion } from 'framer-motion';
import SkillCardPart from './skill-card/skill-card';


function Skills() {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(expandedIndex);
    console.log(index);
  };

  return (
    <div id='skill-section' className='skill-container'>
    <div className='skillContent'>
     <span>What I do</span>
      <p>A skilled and versatile software developer with a strong foundation in mobile application development and front-end technologies.</p>
      <motion.div
      initial={{ y: 20, opacity: 0}}
      animate={{ y:0, opacity:1, transition:{
        staggerChildren: 0.2,
        delayChildren: 0.3,
        bounceStiffness:200
      } }}
      >
        {SKILLS.map((item, index) => (
          <motion.div 
          whileHover={{ scale: 1.03 }}
           key={index}>
            <button className={`skill-btn${expandedIndex === index ? "active" : ""}`} onClick={() => handleToggle(index)}><img src={item.icon} alt='icon'/> {item.title}</button>
            {expandedIndex === index && (
              <SkillCardPart title={item.title} icon={item.icon} skills={item.skills} />
            )}
          </motion.div>
        ))}

      </motion.div>
     </div>

    </div>
  )
}

export default Skills

