import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
<section id='experience'>
<h5>The Skills I have </h5>
<h2>My Skills</h2>
<div className='container experience_container'>

<div className='experience_frontend'>
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
<h4> SASS </h4>
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

<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
<div>
<h4> Angular </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
<div>
<h4> JavaScript </h4>
  <small className='text-light '> Experienced </small>
</div>
</article>
<article className='experience_details'>
  <AiOutlineCheckCircle experience_details/>
<div>
<h4> jQuery </h4>
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