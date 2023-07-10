import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tw2oajm', 'template_sjigdpn', form.current, 'gM2lUeNR12oBZPWeV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icons'/> 
            <h4>Email</h4>
            <h5>abhiguptaee@gmail.com</h5>
            <a href="mailto:abhiguptaee@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons'/> 
            <h4>Whatsapp</h4>
            <h5>+91-7309218369</h5>
            <a href="https://api.whatsapp.com/send?phone+917309218369" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icons'/> 
            <h4>Messenger</h4>
            <h5>FB</h5>
            <a href="https://m.me/" target='_blank' >Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
      
    </>
  )
}

export default Contact
