import React from 'react'
import st from './experients.module.scss'
import { BsPatchCheckFill } from 'react-icons/bs'

export const Experients = () => {
   return (
      <section id='expirience'>
         <h5>What Skill I have</h5>
         <h2>My Experience</h2>
         <div className={`container ${st.container}`}>
            <div className={st.frontend}>
               <h3>Frontend Development</h3>
               <div className={st.content}>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>CSS,SASS/SCSS</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>JavaScript(ES6)</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>Tailwind</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
               </div>
            </div>

            {/* END FROM */}

            <div className={st.backend}>
               <h3>Backend Development</h3>
               <div className={st.content}>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>NodeJS</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>PHP</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        {' '}
                        <h4>Intermediate</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
                  <article className={st.details}>
                     <BsPatchCheckFill className={st.icon} />
                     <div>
                        <h4>Pyton</h4>
                        <small className='text-light'>Experienced</small>
                     </div>
                  </article>
               </div>
            </div>
         </div>
      </section>
   )
}
