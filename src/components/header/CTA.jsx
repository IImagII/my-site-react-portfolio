import React from 'react'
import CV from '../../assets/cv.pdf' // добавили наш pdf резюме
import st from './header.module.scss'

export const CTA = () => {
   return (
      <div className={st.cta}>
         {/* вот таким атрибутом мы показываем что мы можем скачать pdf нашего резюме с атрибутом download*/}
         <a href={CV} download className='btn'>
            Download CV
         </a>
         <a href='#contact' className='btn btn-primary'>
            Lets Talk
         </a>
      </div>
   )
}
