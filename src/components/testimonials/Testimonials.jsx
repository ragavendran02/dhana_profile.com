import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/user.png'

import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/autoplay';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

import 'swiper/swiper.min.css';

// const swiper = new Swiper('.swiper', {
//   autoplay: {
//     delay: 5000,
//   },
// });

const data = [
  {
    avatar : AVATAR,
    name : 'ABC',
    review : 'We are very proud of the service we provide for our customers. In fact, we see a client relationship drastically more personal than that of most agencies in our field.'
  },
  {
    avatar : AVATAR,
    name : 'DEF',
    review : 'We are very proud of the service we provide for our customers. In fact, we see a client relationship drastically more personal than that of most agencies in our field.'
  },
  {
    avatar : AVATAR,
    name : 'GHI',
    review : 'We are very proud of the service we provide for our customers. In fact, we see a client relationship drastically more personal than that of most agencies in our field.'
  },
  {
    avatar : AVATAR,
    name : 'JKL',
    review : 'We are very proud of the service we provide for our customers. In fact, we see a client relationship drastically more personal than that of most agencies in our field.'
  },
  {
    avatar : AVATAR,
    name : 'MNO',
    review : 'We are very proud of the service we provide for our customers. In fact, we see a client relationship drastically more personal than that of most agencies in our field.'
  }
]
function Testimonials() {
  return (
    <section id='testimonials'>
       <h5>Review from Clients</h5>    
       <h2>Testimonials</h2>

       <Swiper className="container testimonials_container"
       modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={{delay:1000}}
      pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                 <img src={avatar} alt="client" />
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
