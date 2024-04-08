import React, { useRef } from 'react'
import "./WorkExperience.css"
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick';
import CustomArrow from './CustomArrow/CustomArrow';
function WorkExperience() {


  const sliderRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true, // Set arrows to true
    prevArrow: <CustomArrow direction="left" />, // Replace with your left arrow component
    nextArrow: <CustomArrow direction="right" />,
    // lazyLoad: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slideToScroll: 1
      },
    },
    ],


  };


  return (
    <div id='experience-section' className='work-container'>
      <h5>Work Experience</h5>
      <div className='work-content'>

        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => {
            return <ExperienceCard key={item.title}
              details={item}
            />
          })}
        </Slider>

      </div>
    </div>
  )
}

export default WorkExperience




