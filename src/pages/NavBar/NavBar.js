import React, { useState, useEffect } from 'react'
import "./NavBar.css"
import MobileNavBar from '../MobileNav/MobileNavBar';
import {Link} from 'react-scroll'
// import { IconButton } from "rsuite";
// import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
// // Import the default CSS
// import "rsuite/dist/rsuite.min.css";



function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  // const toggleMenu = () =>{
  //   console.log(`before : ${openMenu}`);
  //   setOpenMenu(!openMenu);
  //   console.log(openMenu);
  // };
  useEffect(() => {
    console.log(`Updated openMenu: ${openMenu}`);
  }, [openMenu]);

  const toggleMenu = () => {
    console.log(`before : ${!openMenu}`);
    setOpenMenu(openMenu => !openMenu);
  };


  return (
    <div className='navbar'>
      {openMenu && <MobileNavBar isOpen={openMenu} toggleMenu={toggleMenu} />}

      <div className='nav-content'>
        {/* <div>dfghnm</div> */}
        <div>
          <Link
          activeClass='active' to='hero-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
           className='nav-bar-item'>Home</Link>
          <Link 
          activeClass='active' to='skill-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='nav-bar-item'>Skills</Link>
          <Link
          activeClass='active' to='experience-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='nav-bar-item'>Experience</Link>
          <Link
          activeClass='active' to='projects-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='nav-bar-item'>Projects</Link>
          <Link 
          activeClass='active' to='contact-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className='nav-bar-item'>Contact me</Link>
          <button className='nav-bar-btn' onClick={() => {
            document.getElementById("contact-section").scrollIntoView({behavior: "smooth"});
           }}>Hire me</button>

    
      

       
        </div>
        {/* 
            <IconButton className='menu-btn' icon={<Menu/>} color="rgb(168, 168, 221)"
                appearance="primary" onClick={()=> {}} /> */}

        
            {/* <button className='menu-btn' onClick={toggleMenu}>
                <span class = {"material-symbols-outlined"}
                style={{fontSize: "1.8rem"}}
                
                >
                  {openMenu ? "close" : "menu"}
                </span>

            </button> */}





      </div>

      <button className='menu-btn' onClick={toggleMenu}>
                <span class = {"material-symbols-outlined"}
                style={{fontSize: "1.8rem"}}
                
                >
                  {openMenu ? "close" : "menu"}
                </span>

            </button>
    </div>
  )
}

export default NavBar
