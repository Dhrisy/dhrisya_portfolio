import React from 'react'
import "./Hero.css"
import HeroImg from "../../assets/profile_photo.jpeg"

import ReactImg from "../../assets/react_logo.png"
import FlutterImg from "../../assets/flutter_logo.png"
import FirebaseImg from "../../assets/firebase_logo.png"
import PythonImg from "../../assets/python.png"

function Hero() {
  return (
    <div id='hero-section' className='hero-container'>
        <div className='hero-content'>
            <span className='hello'>Hello,<br/></span>
            <span className='intro-text'>I'm <span className='hero-name'>Dhrisya L</span></span>
            <p >
            A results-oriented software developer with expertise in Flutter, Dart, and ReactJS. Experienced in designing and implementing multilingual mobile applications and web solutions. Seeking a position to leverage technical skills in UI design, application development, and authentication integration to contribute to innovative projects and advance in software development.            </p> 
        </div>


       <div className='hero-img-icon'>
        <img src={HeroImg} alt='ime' className='hero-img'/>
        <div className='icons'>
        <div className='tech-icon'>
        <img src={FlutterImg} alt='ime' className='tech-icon-img'/>
        </div>
        <div className='tech-icon'>
        <img src={ReactImg} alt='ime' className='tech-icon-img'/>
        </div>
        <div className='tech-icon'>
        <img src={FirebaseImg} alt='ime' className='tech-icon-img'/>
        </div >
        <div className='tech-icon'>
        <img src={PythonImg} alt='ime' className='tech-icon-img'/>
        </div >
       
        </div>
    
        
        </div> 
      
    </div>
  )
}

export default Hero
