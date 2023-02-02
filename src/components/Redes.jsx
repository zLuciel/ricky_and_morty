import React from 'react'
import "./css/Redes.css"
import { FaLinkedinIn,FaInstagram,FaGithub,FaFacebookF} from 'react-icons/fa';
export const Redes = () => {
  return (
    <div className="redes-social">
            <div className="flex-redes">
                <span></span>
                <div className="icon-redes">
                  <li>
                    <ul><a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/emmanuel-abregù-270175220/"><FaLinkedinIn/></a></ul>
                    <ul><a target="_blank" rel='noreferrer' href="https://www.instagram.com/manu_abregu.s/"><FaInstagram/></a></ul>
                    <ul><a target="_blank" rel='noreferrer' href="https://github.com/zLuciel"><FaGithub/></a></ul>
                    <ul><a target="_blank" rel='noreferrer' href="https://www.facebook.com/emmanuel.abregu.92"><FaFacebookF/></a></ul>
                  </li>
                </div>
                <span></span>
            </div>
        </div>
  )
}
