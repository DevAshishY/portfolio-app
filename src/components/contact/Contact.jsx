import React,{ useRef } from 'react';

import './contact.css'
import{AiOutlineMail} from "react-icons/ai"
import{BsMessenger} from "react-icons/bs"
import{BsWhatsapp} from "react-icons/bs"
import emailjs from '@emailjs/browser';



function Contact() {
 
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o3coo1z', 'template_mvnht5o', form.current, '2fqIWTlEjhYx1zzXg')
e.target.reset();
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (


<section id='contact' >
<h5> Get In Touch</h5>
<h2>Contact Me</h2>
<div className='container contact_container'>
<div className='contact_options'>
  <article className='contact_option'>
  <AiOutlineMail className='contact_option-icon'/>
    <h4>Email</h4>
    <h5>ashishyadav2758@gmail.com</h5>
    <a href='mailto:ashishyadav2758@gmail.com' target= "_blank">Send a message</a>
  </article>
  
  <article className='contact_option'>
  <BsWhatsapp className='contact_option-icon'/>
    <h4>Whatsapp</h4>
    <h5>+918826166899</h5>
    <a href='https://api.whatsapp.com/send?phone+918826166899'target= "_blank">send a message</a>
  </article>
</div>
<form ref={form } onSubmit={sendEmail}>
 <input type="text" name='name' placeholder='Your Full Name' required ></input>
 <input type="email" name='email' placeholder='Your Email' required ></input>
 <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
 <button type='submit' className='btn btn-primary'>Send Message</button>
 </form>



</div>


 </section>
  )
}

export default Contact
