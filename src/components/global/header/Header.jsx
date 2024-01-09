import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../../assets/me.png'
import HeaderSocial from './Social'


const Header = () => {
  return (
   <header>
   <div className='container header_container'>
<h5>Hello I'm</h5>
<h1>Ashish yadav</h1>
<h5 className='text-light'>Frontend Developer</h5>
<CTA/>
<HeaderSocial/>
<div  className='me'>
<img src={ME} alt='me' width={574} height={910}></img>
</div>
<a  href='#contact' className='scroll_down'>Scroll Down</a>
   </div>


   </header>
  )
}

export default Header