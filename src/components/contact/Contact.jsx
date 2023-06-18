import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {HiOutlineMail} from 'react-icons/hi'
import {FiInstagram} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ai3dj97', 'template_hkj323m', form.current, 'PMXXCFc2Te9NcuPz_')

    alert("your message has been sent");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vrokendamn@gmail.com</h5>
            <a href="mailto:vrokendamn@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@irwan_tyo</h5>
            <a href="https://www.instagram.com/irwan_tyo/">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>081336172940</h5>
            <a href="https://api.whatsapp.com/send/?phone=6281336172940&text&type=phone_number&app_absent=0">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='name' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact