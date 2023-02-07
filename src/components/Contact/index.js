import Loader from 'react-loaders'
import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const refForm = useRef()
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])
  const clearForm = () => {
    refForm.current.user_name.value = ''
    refForm.current.user_email.value = ''
    refForm.current.user_subject.value = ''
    refForm.current.message.value = ''
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_qlda9kg',
        'template_lx4nc7f',
        refForm.current,
        'xMaW9DZlbg8AKBkER'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          clearForm()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am intersted in freelance opportunities or large projects.
            However,if you have other request or question,don't hesitate to
            contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="user_subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
