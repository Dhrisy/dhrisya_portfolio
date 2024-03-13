import React from 'react'
import "./ContactForm.css"

function ContactForm() {
  return (
    <div className='contact-form-container'>
      <form>
        <div className='name-container'>
            <input type='text' name='firstname' placeholder='First name'></input>
            <input type='text' name='lastname' placeholder='Last name'></input>
        </div>

        
        <input type='text' name='email' placeholder='Email'></input>
        <textarea type='text' name='message' placeholder='Message' rows={3}/>

<button>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm
