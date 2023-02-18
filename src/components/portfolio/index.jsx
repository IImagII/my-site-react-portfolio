import React from 'react'
import st from './portfolio.module.scss'
import { data } from '../../utils/data'

export const Portfolio = () => {
   return (
      <section id='portfolio'>
         <h5>My REcent Work</h5>
         <h2>Portfolio</h2>
         <div className={`container ${st.container}`}>
            {data.map(({ id, image, title, github, demo }) => {
               return (
                  <article className={st.item} key={id}>
                     <div className={st.image}>
                        <img src={image} alt={image} />
                     </div>
                     <h3>{title}</h3>
                     <div className={st.cta}>
                        <div className={st.first}>
                           <a href={github} className='btn' target='_blank'>
                              Github
                           </a>
                           <a
                              href={demo}
                              className='btn btn-primary'
                              target='_blank'
                           >
                              DEMO
                           </a>
                        </div>

                        <a
                           href={demo}
                           className='btn btn-primary'
                           target='_blank'
                        >
                           Описание
                        </a>
                     </div>
                  </article>
               )
            })}
         </div>
      </section>
   )
}
