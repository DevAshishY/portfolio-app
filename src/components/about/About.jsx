import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolderOpen} from 'react-icons/ai';


const About = () => {
  return (
   <section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className='container about_container'>
<div className='about_me'>
  <div className='about_me-image'>
<img src={ME} alt="About Image">
</img>
  </div>
  </div>
  <div className='about_content'>
    <div className='about_cards'>
      <article className='about_card'>
<FiAward className='about_icon'/>      
        <h5>Experiences</h5>
<small>5+ years Working</small>  
      </article>
      <article className='about_card'>
           <FiUsers className='about_icon'/>
        <h5>Clients</h5>
<small>300+ Worldwide</small>  
      </article>
      <article className='about_card'>
<AiFillFolderOpen className='about_icon'/>      
        <h5>Projects</h5>
<small>80+  projects</small>  
      </article>
    </div>
    <p>
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>

  </div>
  
</div>
   </section>
  )
}

export default About