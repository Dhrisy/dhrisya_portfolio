import React from 'react'
import "./MobileNavBar.css"
import { Link } from 'react-scroll';


const MobileNavBar = ({ isOpen, toggleMenu, setOpen }) => {
  console.log(`hhhh ${isOpen}, ${toggleMenu}`);
  return (
    <>
      <div className={`mobile-menu${isOpen === true ? "active" : ""}`}
      // onClick={toggleMenu}
      >

        <div className='mobile-menu-container'>
          {/* <button
        onClick={() =>{
          setOpen(false);
          isOpen = false;
          console.log(isOpen);
        }}
        style={{display: 'flex', 
        alignItems: 'center',
        // alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10 }}
        >
        <span 
        
        class = {"material-symbols-outlined"}
                style={{fontSize: "1.8rem", 
                display: 'flex', 
                alignItems: 'center',
                // alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              padding: 10
            }}
                
                >
                  Close
                </span>
        </button> */}


          <Link
            activeClass='active' to='entry-section'
            onClick={() => {
              setOpen(false)
            }}
            spy={true}
            smooth={true}
            offset={-700}
            duration={500}
            className='Mobilenav-bar-item'>Home</Link>

          <Link
            activeClass='active' to='skill-section'
            onClick={() => {
              setOpen(false)
            }}
            spy={true}
            smooth={true}
            offset={-700}
            duration={500}
            className='Mobilenav-bar-item'>Skills</Link>

          {/* <Link
            activeClass='active' to='experience-section'
            onClick={() => {
              setOpen(false)
            }}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='Mobilenav-bar-item'>Experience</Link> */}


          <Link
            activeClass='active' to='experience-section'
            onClick={() => {
              setOpen(false)
            }}
            spy={true}
            smooth={true}
            offset={-700}
            duration={500}
            className='Mobilenav-bar-item'>Experience</Link>

          <Link
            activeClass='active' to='projects-section'
            onClick={() => {
              setOpen(false)
            }}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='Mobilenav-bar-item'>Projects</Link>

          <Link
            activeClass='active' to='contact-section'
            onClick={() => {
              setOpen(false)
            }}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='Mobilenav-bar-item'>Contact me</Link>
          <button className='Mobilenav-bar-btn' onClick={() => {
            setOpen(false)
            // isOpen = false;
            document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
          }}>Hire me</button>
        </div>

      </div>

    </>
  )
}

export default MobileNavBar
