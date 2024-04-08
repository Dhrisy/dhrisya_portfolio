import React, { useState, useEffect } from 'react'
import "./NavBar.css"
import MobileNavBar from '../MobileNav/MobileNavBar';
import {Link} from 'react-scroll'
import { motion } from 'framer-motion';



function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  
  useEffect(() => {
    console.log(`Updated openMenu: ${openMenu}`);
    handleItemClick('Home')
    
  });

  const toggleMenu = () => {
    console.log(`before : ${!openMenu}`);
    setOpenMenu(openMenu => !openMenu);
  };

  const [activeLink, setActiveLink] = useState('');

  const handleItemClick = (item) => {
    setActiveLink(item);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div className='navbar'
    variants={container}
    initial= 'hidden'
    animate='visible'
    >
      {openMenu && <MobileNavBar setOpen={setOpenMenu}/>}
      {/* {openMenu && <MobileNavBar isOpen={openMenu} toggleMenu={toggleMenu} />} */}

      <div className='nav-content'>
       
        <div>
          <Link
          activeClass='active' to='entry-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          
           className={activeLink === 'Home' ? 'nav-bar-itemactive' : 'nav-bar-item'}
            onClick={() => handleItemClick('Home')}
           >Home</Link>
          <Link 
          activeClass='active' to='skill-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={activeLink === 'Skills' ? 'nav-bar-itemactive' : 'nav-bar-item'}
            onClick={() => handleItemClick('Skills')}>Skills</Link>
          
          <Link
          activeClass='active' to='experience-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          // className='nav-bar-item'
          className={activeLink === 'Experience' ? 'nav-bar-itemactive' : 'nav-bar-item'}
            onClick={() => handleItemClick('Experience')}
          >Experience</Link>
          
          <Link
          activeClass='active' to='projects-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          // className='nav-bar-item'
          className={activeLink === 'Projects' ? 'nav-bar-itemactive' : 'nav-bar-item'}
            onClick={() => handleItemClick('Projects')}
          >Projects</Link>
          
          <Link 
          activeClass='active' to='contact-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          // className='nav-bar-item'
          className={activeLink === 'Contact' ? 'nav-bar-itemactive' : 'nav-bar-item'}
            onClick={() => handleItemClick('Contact')}
          >Contact me</Link>

          <button className='nav-bar-btn' onClick={() => {
            document.getElementById("contact-section").scrollIntoView({behavior: "smooth"});
           }}>Hire me</button>

    
      

       
        </div>
       





      </div>

      <button className='menu-btn' onClick={toggleMenu}>
                <span class = {"material-symbols-outlined"}
                style={{fontSize: "1.8rem"}}
                
                >
                  {openMenu ? "close" : "menu"}
                </span>

            </button>
    </motion.div>
  )
}

export default NavBar
