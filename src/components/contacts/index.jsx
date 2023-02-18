import React, { useRef } from 'react'
import st from './contacts.module.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

export const Contacts = () => {
   //настраиваем форму для отправки с сайт www.emailjs.com
   const form = useRef()

   const sendEmail = e => {
      e.preventDefault()

      emailjs
         .sendForm(
            'service_wbt30yc',
            'template_5bl7p6b',
            form.current,
            '0KoCSW1y2VriHL4zq'
         )
         .then(
            result => {
               console.log(result.text)
            },
            error => {
               console.log(error.text)
            }
         )
      e.target.reset() //для обнуления формы
   }

   return (
      <section id='contact'>
         <h5>Get in Touch</h5>
         <h2>CONTACT</h2>
         <div className={`container ${st.container}`}>
            <div className={st.options}>
               <article className={st.option}>
                  <AiOutlineMail className={st.icon} />
                  <h4>Email</h4>
                  <h5>asfda@ss.ss</h5>
                  <a href='mailto:asfda@ss.ss' target='_blank'>
                     Send a message
                  </a>
               </article>
               <article className={st.option}>
                  <BsMessenger className={st.icon} />
                  <h4>Message</h4>
                  <h5>sdfsdf</h5>
                  <a href='https://facebook.com' target='_blank'>
                     Send a message
                  </a>
               </article>
               <article className={st.option}>
                  <BsWhatsapp className={st.icon} />
                  <h4>Whatsapp</h4>
                  <h5>+1121212</h5>
                  <a
                     href='https://api.whatsapp.com/send?phone+33213123'
                     target='_blank'
                  >
                     Send a message
                  </a>
               </article>
            </div>

            {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
               <input
                  type='text'
                  name='name'
                  placeholder='Your Full Name'
                  required // это ставиться чтобы нельзя было отправить пустую форму
               />
               <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  required
               />
               <textarea
                  name='message'
                  rows='9'
                  placeholder='Your Message'
                  required
               ></textarea>
               <button type='submit' className='btn btn-primary'>
                  Send Message
               </button>
            </form>
         </div>
      </section>
   )
}
