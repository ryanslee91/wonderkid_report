import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footerDiv">
    <footer className="footer">
    <Link id="titleLink" to='/'><h5 id="footerTitle">WONDERKID REPORT</h5></Link>
        <div className="icons">
        <a id="github" href='https://github.com/ryanslee91' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} id='git' />
      </a>
      <a id="linkedin" href='https://www.linkedin.com/in/sang-hyun-ryan-lee-801394a5/' target='_blank' rel='noreferrer'> 
        <FontAwesomeIcon icon={faLinkedin} id='linkedin' />
          </a>
          </div>
        </footer>
    </div>
  )
}
