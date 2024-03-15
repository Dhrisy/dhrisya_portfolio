import React from 'react'
import "./MobileNavBar.css"
import { Link } from 'react-scroll';


const MobileNavBar = ({isOpen, toggleMenu}) => {
    console.log(`hhhh ${isOpen}, ${toggleMenu}`);
  return (
    <>
    <div className= {`mobile-menu.${isOpen === true ? "active" : ""}`}
    // onClick={toggleMenu}
    >
        
        <div className='mobile-menu-container'>
        <Link
          activeClass='active' to='hero-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
           className='Mobilenav-bar-item'>Home</Link>
           <Link 
          activeClass='active' to='skill-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='Mobilenav-bar-item'>Skills</Link>
           <Link
          activeClass='active' to='experience-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='Mobilenav-bar-item'>Experience</Link>
           <Link 
          activeClass='active' to='contact-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='Mobilenav-bar-item'>Contact me</Link>
           <button className='Mobilenav-bar-btn' onClick={() => {
            // isOpen = false;
            document.getElementById("contact-section").scrollIntoView({behavior: "smooth"});
           }}>Hire me</button>
        </div>

    </div>
      
    </>
  )
}

export default MobileNavBar
