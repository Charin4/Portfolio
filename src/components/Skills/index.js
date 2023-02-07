import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Loader from 'react-loaders'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import python from '../../assets/images/python.png'

const Skills = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <div className="icon4">
            <img src={python} alt="" width="100" height="100" />
            {/* <FontAwesomeIcon icon={faPython} color="#ffde57" /> */}

            <h2>Python</h2>
          </div>
          <div className="icon2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            <h2>Html</h2>
          </div>
          <div className="icon3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <h2>CSS</h2>
          </div>
          <div className="icon1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            <h2>React</h2>
          </div>
          <div className="icon5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            <h2>JavaScript</h2>
          </div>
          <div className="icon6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            <h3>Git</h3>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Skills
