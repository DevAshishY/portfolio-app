import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
<section id='experience'>
<h5>The Skills I have </h5>
<h2>My Experience</h2>
<div className='container experience_container'>

<div className='experience_frontend'>
  <h3>Frontend development</h3>
  <div className='experience_content'>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
 <div>
 <h4> Html </h4>
  <small className='text-light '> Experienced </small>
 </div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
 <div>
 <h4> Css </h4>
  <small className='text-light '> Intermidated </small>
 </div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
 <div>
 <h4> Bootstrap </h4>
  <small className='text-light '> Experienced </small>
 </div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
<div>
<h4> Bootstrap </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
<div>
<h4> React </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
</div>
  </div>
<div className='experience_backend'>
<h3>Backend development</h3>
  <div className='experience_content'>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details />
<div>  <h4> MongoDB </h4>
  <small className='text-light '> Experienced </small></div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details />
<div>
<h4> Php </h4>
  <small className='text-light '> Intermidated </small>
</div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details />
<div>
<h4> Mysql </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details />
<div>
<h4> Python </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details />
<div>
<h4> Java </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
</div>
</div>
</div>
<div/>
</section>
    )
}

export default Experience