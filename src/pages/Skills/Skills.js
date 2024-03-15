import React, { useState } from 'react'
import "./Skills.css"
import { SKILLS } from '../../utils/data'

import SkillCardPart from './skill-card/skill-card';


// function Skills() {

//     const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

//     useEffect(() =>{
//         console.log(`selectedSkill: ${selectedSkill.title}  ${SKILLS[0]}`);
//     }, [selectedSkill]);
//     const handleSelectedSkill = (data) =>{
//         setSelectedSkill(data);
//         console.log('vccvbn');
//         console.log(`gg  ${selectedSkill.title}`);

//     }
//   return (
//     <section id='skill-section' className='skill-container'>
//       <h5>Technical Proficiency</h5>

//       <div className='skill-content'>
//         <div className='skills'>
//         {SKILLS.map((item) => {

//            return  <div style={{flex:1}}>
//             <SkillCard
//             title={item.title}
//             iconUrl={item.icon}
//             isActive={selectedSkill.title === item.title}
//              onClick ={() =>{
//             console.log(`iiiii  ${selectedSkill.title === item.title}`);
//             handleSelectedSkill(item)
//            }}
//             />
//            </div>
//           //  <SkillCard
//           //  title={item.title}
//           //  iconUrl={item.icon}
//           //  isActive={selectedSkill.title === item.title}
//           //  onClick ={() =>{
//           //   console.log(`iiiii  ${selectedSkill.title === item.title}`);
//           //   handleSelectedSkill(item)
//           //  }}

//           //  />
//         })}
//         </div>

//         <div style={{flex:1}} className='skill-info'>

//           <SkillCardInfo
//           heading={selectedSkill.title}
//           skills={selectedSkill.skills}
//           />
//         </div>

//         {/* <div className='skill-info'>
//             <SkillCardInfo
//             heading={selectedSkill.title}
//             skills={selectedSkill.skills}
//             />
//         </div> */}

//       </div>
//     </section>
//   )
// }

// export default Skills



function Skills() {

  const [expandedIndex, setExpandedIndex] = useState(null);
  // const [isActive, setActive] = useState(false);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    // setActive((prev_index) => (prev_index === index ? ))
    console.log(expandedIndex);
    console.log(index);
  };
  return (
    <div id='skill-section' className='skill-container'>
     <div className='skillContent'>
     <span>What I do</span>
      <p>A skilled and versatile software developer with a strong foundation in mobile application development and front-end technologies.</p>
      <div>
        {SKILLS.map((item, index) => (
          <div key={index}>
            <button className={`skill-btn${expandedIndex === index ? "active" : ""}`} onClick={() => handleToggle(index)}><img src={item.icon}/> {item.title}</button>
            {expandedIndex === index && (
              <SkillCardPart title={item.title} icon={item.icon} skills={item.skills} />
            )}
          </div>
        ))}

      </div>
     </div>

    </div>
  )
}

export default Skills

