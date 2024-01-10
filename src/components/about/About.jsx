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

  <div className='about_content'>
    <div className='about_cards'>
      <article className='about_card'>
<FiAward className='about_icon'/>      
        <h5>Experiences</h5>
<small>8+ years Working</small>  
      </article>

      <article className='about_card'>
<AiFillFolderOpen className='about_icon'/>      
        <h5>Projects</h5>
<small>100+  projects</small>  
      </article>
    </div>
    <p>
    Solution-driven Fronted Developer adept at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction. Proven experience developing consumer-focused websites using HTML, CSS, React and JavaScript. Built products for desktop and mobile app users over 10 years with 8 years relevant, meeting highest standards for web design, user experience, best practices and speed. Designed and developed web applications across multiple APIs, third-party integrations .</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>

  </div>
  
</div>
   </section>
  )
}

export default About