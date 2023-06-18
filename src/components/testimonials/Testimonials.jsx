import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//swiper 
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: 'Bambang Samsudin',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus. Sint totam, suscipit doloremque rerum ad ducimus repellendus sequi. Quasi debitis error facere doloremque soluta voluptatum fuga ullam non dolores.'
  },
  {
    avatar: AVTR2,
    name: 'Gus Sulap',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus. Sint totam, suscipit doloremque rerum ad ducimus repellendus sequi. Quasi debitis error facere doloremque soluta voluptatum fuga ullam non dolores.'
  },
  {
    avatar: AVTR3,
    name: 'Rijal Komarudin',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus. Sint totam, suscipit doloremque rerum ad ducimus repellendus sequi. Quasi debitis error facere doloremque soluta voluptatum fuga ullam non dolores.'
  },
  {
    avatar: AVTR4,
    name: 'Yeni Susilan',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus. Sint totam, suscipit doloremque rerum ad ducimus repellendus sequi. Quasi debitis error facere doloremque soluta voluptatum fuga ullam non dolores.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials