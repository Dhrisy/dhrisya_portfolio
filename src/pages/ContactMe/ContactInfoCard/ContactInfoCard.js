import React from 'react'
import "./ContactInfoCard.css"

function ContactInfoCard({iconUrl, text}) {
  return (
    <div className='contact-info-card'>
      <div className='icon'>
        <img src={iconUrl} alt={text} className='icon-img'/>
        
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
