



import React, { useRef } from 'react'
import "./ContactMe.css"
import LinkedIn from "../../assets/linkedin.png"
import Insta from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';


function ContactMe() {
  // const [showAlert, setAlert] = useState(false);
  // const handleShowAlert = () => {
  //   setAlert(true);
  //   console.log(showAlert);
  // }

  // const handleCloseAlert = () => {
  //   setAlert(false);
  //   console.log(showAlert);
  // }


  const form = useRef();
  // const checkValidate = () => {
  //   const name = form.current['from_name'].value;
  //   const email = form.current['from_email'].value;
  //   const message = form.current['message'].value;
    
  //   if (!email || !name || !message) {
  //     alert('Please enter all the details');
  //   } else {
  //     sendEmail();
  //   }
  // }

  const navigateToLinkedIn = () => {
   
    const linkedInProfileUrl = 'https://www.linkedin.com/in/dhrisya-l-61b1b1208';
    window.open(linkedInProfileUrl, '_blank');
  };

  const navigateToInstagram = () => {
    
    const InstagramProfileUrl = 'https://www.instagram.com/dhrisya._/';
    window.open(InstagramProfileUrl, '_blank');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_luw286n', 'template_qunnzvg', form.current, {
        publicKey: 'kfC6202TCJEQwSZ1k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const sendEmail = () => {
  //   // e.preventDefault();
  //   console.log('//////////////////');

  //   emailjs
  //     .sendForm('service_luw286n', 'template_qunnzvg', form.current, {
  //       publicKey: 'kfC6202TCJEQwSZ1k',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         alert('Email sent');
  //         // e.target.reset();
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <div id='contact-section' className='contact-container'>
      <div className='contact'>

        <h2>Contact me</h2>
        <span>Please fill out the form below to discuss any work opportunities</span>
        <form ref={form} onSubmit={sendEmail}>
          <input 
          id='user_name' type='text' className='name' 
          placeholder='Your name' name='from_name' />
          <input id='user_email' type='text' className='email' placeholder='Your email' name='from_email' />
          <textarea id='user_message' type='text' className='message' placeholder='Your Message' name='message' rows={4} />

          <button type='submit' value="Send" className='submitBtn'>Submit</button>

          <div className='links'>
            <img src={LinkedIn} alt='LinkedIn' className='linkedin'
            onClick={navigateToLinkedIn}
            style={{ cursor: 'pointer' }}
            
            />
            <img src={Insta} alt='Instagram' className='instagram'
            onClick={navigateToInstagram}
            style={{ cursor: 'pointer' }}
            />
          </div>
        </form>
        {/* Conditionally render the alert
      {showAlert && <CustomAlert message={"aaaaaaaaaaaa"} onClose={handleCloseAlert} />} */}
      </div>
    </div>
  )
}


export default ContactMe
