import React from 'react'
import "./MobileNavBar.css"


const MobileNavBar = ({isOpen, toggleMenu}) => {
    console.log(`hhhh ${isOpen}, ${toggleMenu}`);
  return (
    <>
    <div className= {`mobile-menu.${isOpen === true ? "active" : ""}`}
    // onClick={toggleMenu}
    >
        
        <div className='mobile-menu-container'>
        <span className='Mobilenav-bar-item'>Home</span>
           <span className='Mobilenav-bar-item'>Skills</span>
           <span className='Mobilenav-bar-item'>Experience</span>
           <span className='Mobilenav-bar-item'>Contact me</span>
           <button className='Mobilenav-bar-btn' onClick={() => {}}>Hire me</button>
        </div>

    </div>
      
    </>
  )
}

export default MobileNavBar
