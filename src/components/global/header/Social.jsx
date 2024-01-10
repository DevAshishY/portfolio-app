import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
    <a href='https://www.linkedin.com/in/ashishyadav2758/' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com/DevAshishY' target="_blank"><BsGithub/></a>
      
    </div>
  )
}

export default HeaderSocial