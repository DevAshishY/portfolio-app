import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// Import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
  avatar : AVTR1,
  name: 'Tina Snow',
  title : 'Crypto Currency Dashboard & financial visualation',
review : ' publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
},
  {
  avatar : AVTR2,
  name: 'Tina Snow',
  title : 'Crypto Currency Dashboard & financial visualation',
review : ' publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
},
  {
  avatar : AVTR3,
  name: 'Tina Snow',
  title : 'Crypto Currency Dashboard & financial visualation',
review : ' publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
},
  {
  avatar : AVTR4,
  name: 'Tina Snow',
  title : 'Crypto Currency Dashboard & financial visualation',
review : ' publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
},
  ]

const Testimonials = () => {
  return (
  <section id='testimonials'>
<h5>Review From Clients</h5>
<h2>Testimonials</h2> 
<Swiper className='container testimonials_container'

      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
{
  data.map(({avatar, name, review},index)=>{
    return(
      <SwiperSlide key={index} className='testimonial'>
<div className='client_avatar'>
  <img src={avatar} ></img>
</div>
  <h5 className='client_name'>{name}</h5>
  <small className='client_review'>
   {review}
  </small>
  </SwiperSlide>
    )
  })
}
</Swiper>
  </section>
  )
}

export default Testimonials