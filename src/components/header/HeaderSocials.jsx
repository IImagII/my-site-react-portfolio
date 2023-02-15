import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'
import st from './header.module.scss'

export const HeaderSocials = () => {
   return (
      <div className={st.socials}>
         <a href='https://linkedin.com' target='_blank'>
            <BsLinkedin />
         </a>
         <a href='https://github.com' target='_blank'>
            <BsGithub />
         </a>
         <a href='https://dribble.com' target='_blank'>
            <BsDribbble />
         </a>
      </div>
   )
}
