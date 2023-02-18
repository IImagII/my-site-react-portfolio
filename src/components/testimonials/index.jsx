import React from 'react'
import st from './testimonials.module.scss'
import { testimonials } from '../../utils/data.js'
// Import Swiper styles
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Testimonials = () => {
   return (
      <section id='testimonials'>
         <h5>Review from clients</h5>
         <h2>TESTIMONIALS</h2>

         <Swiper
            className={`container ${st.container} ${st.mySwiper}`}
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
         >
            {testimonials.map(({ id, avatar, name, review }) => {
               return (
                  <SwiperSlide className={st.testimonials} key={id}>
                     <div className={st.avatar}>
                        <img src={avatar} alt='avatar one' />
                     </div>
                     <h5 className={st.name}>{name}</h5>
                     <small className={st.review}>{review}</small>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </section>
   )
}
