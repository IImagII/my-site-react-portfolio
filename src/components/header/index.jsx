import React from 'react'
import st from './header.module.scss'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
   return (
      <header>
         <div className={`container ${st.container}`}>
            <h4>Hello, I'm</h4>
            <h1>Hajia bintu</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            {/* это компонента с нашими кнопками мы ее сделали в той же папке */}
            <CTA />
            <HeaderSocials />
            <div className={st.me}>
               <img src={ME} alt='me' />
            </div>
            <a href='#contact' className={st.scroll_down}>
               Scroll Down
            </a>
         </div>
      </header>
   )
}
