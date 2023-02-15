import React from 'react'
import st from './about.module.scss'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
   return (
      <section id='about'>
         <h5>GEt To Know</h5>
         <h2>About Me</h2>
         <div className={`container ${st.container}`}>
            <div className={st.me}>
               <div className={st.image}>
                  <img src={ME} alt='About image' />
               </div>
            </div>
            <div className={st.content}>
               <div className={st.cards}>
                  <article className={st.card}>
                     <FaAward className={st.icon} />
                     <h5>Experience</h5>
                     <small>3+ Years Working</small>
                  </article>

                  <article className={st.card}>
                     <FiUsers className={st.icon} />
                     <h5>Clients</h5>
                     <small>200+ Worlwide</small>
                  </article>

                  <article className={st.card}>
                     <VscFolderLibrary className={st.icon} />
                     <h5>Projects</h5>
                     <small>80+ complited</small>
                  </article>
               </div>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates aliquid molestias corporis, beatae culpa eius est
                  facere voluptatum sequi vitae accusantium laborum eos sit?
                  Cumque ipsum officiis recusandae facilis culpa?
               </p>

               <a href='#contact' className='btn btn-primary'>
                  LetS Talk
               </a>
            </div>
         </div>
      </section>
   )
}
