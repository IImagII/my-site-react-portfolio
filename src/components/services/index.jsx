import React from 'react'
import st from './services.module.scss'
import { FiCheck } from 'react-icons/fi'

export const Services = () => {
   return (
      <section id='services'>
         <h5>What i Offer</h5>
         <h2>Services</h2>
         <div className={`container ${st.container}`}>
            <article className={st.service}>
               <div className={st.head}>
                  <h3>UI/UX Desing</h3>
               </div>
               <ul className={st.list}>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
               </ul>
            </article>
            {/* END UI/UX */}

            <article className={st.service}>
               <div className={st.head}>
                  <h3>WEB DEVELOPER</h3>
               </div>
               <ul className={st.list}>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
               </ul>
            </article>
            {/* END  WEB DEVELOPER*/}

            <article className={st.service}>
               <div className={st.head}>
                  <h3>Content Creation</h3>
               </div>
               <ul className={st.list}>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
                  <li>
                     <FiCheck className={st.icon} />
                     <p>Lorem ipsum dolor sit, amet consectetur</p>
                  </li>
               </ul>
            </article>
            {/* END Content Creation */}
         </div>
      </section>
   )
}
