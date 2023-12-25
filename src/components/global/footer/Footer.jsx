import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
<footer>
<a href='#' className='footer_logo'>Ashish Yadav</a>
<ul className='permalinks'>
<li> <a href='#'>Home</a></li>
<li> <a href='#about'>About</a></li>
<li> <a href='#experiences'>Experiences</a></li>
<li> <a href='#services'>Services</a></li>
<li> <a href='#portfolio'>Portfolio</a></li>
<li> <a href='#testimonials'>Testimonials</a></li>
<li> <a href='#contact'>Contact</a></li>
</ul>

<div className='footer_socials'>
<a href='https://facebook.com'><BsFacebook/> </a>
<a href='https://instagram.com'><BsInstagram/></a>
<a href='https://twitter.com'><BsTwitter/></a>
</div>

<div className='footer_copyrirgt'>
  <small>&copy; React Tutorials. All rights reserved.</small>
</div>

</footer>
  )
}

export default Footer