import React, { useState } from 'react'
import st from './nav.module.scss'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

export const Nav = () => {
   const [activeNav, setActiveNav] = useState('#')
   return (
      <nav>
         {/* # мы делаем перемещение постранице */}
         <a
            href='#'
            className={activeNav === '#' ? st.active : ''} //динамически меняет класс присваиваем active
            onClick={() => setActiveNav('#')} // изменям класс кпри клике
         >
            <AiOutlineHome />
         </a>
         <span className={`${activeNav !== '#' ? st.tooltiptext : ''} `}>
            начало
         </span>
         <a
            href='#about'
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? st.active : ''}
         >
            <AiOutlineUser />
         </a>
         <span className={`${activeNav !== '#about' ? st.tooltiptext : ''} `}>
            Обо мне
         </span>
         <a
            href='#expirience'
            className={activeNav === '#expirience' ? st.active : ''}
            onClick={() => setActiveNav('#expirience')}
         >
            <BiBook />
         </a>
         <span
            className={`${activeNav !== '#expirience' ? st.tooltiptext : ''} `}
         >
            Опыт работы
         </span>
         <a
            href='#services'
            className={activeNav === '#services' ? st.active : ''}
            onClick={() => setActiveNav('#services')}
         >
            <RiServiceLine />
         </a>
         <span
            className={`${activeNav !== '#services' ? st.tooltiptext : ''} `}
         >
            Услуги
         </span>

         <a
            href='#contact'
            className={activeNav === '#contact' ? st.active : ''}
            onClick={() => setActiveNav('#contact')}
         >
            <AiOutlineMessage />
         </a>
         <span className={`${activeNav !== '#contact' ? st.tooltiptext : ''} `}>
            Контакты
         </span>
      </nav>
   )
}
