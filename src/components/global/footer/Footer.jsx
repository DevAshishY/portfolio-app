import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
<footer>
<a href='#' className='footer_logo'>Ashish Yadav</a>
<ul className='permalinks'>
<li> <a href='#'>Home</a></li>
<li> <a href='#about'>About</a></li>
<li> <a href='#experiences'>Experiences</a></li>
<li> <a href='#portfolio'>Portfolio</a></li>
<li> <a href='#contact'>Contact</a></li>
</ul>

<div className='footer_socials'>
<a href='https://www.linkedin.com/in/ashishyadav2758/' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com/DevAshishY' target="_blank"><BsGithub/></a>


</div>

<div className='footer_copyrirgt'>
  <small>&copy; Ashish yadav. All rights reserved.</small>
</div>

</footer>
  )
}

export default Footer