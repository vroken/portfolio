import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/irwan-prasetyo-1a13a71b1/" target="_blank"><BsLinkedin/></a>
      <a href="https://www.github.com" target="_blank"><BsGithub/></a>
      <a href="https://www.instagram.com" target="_blank"><BsInstagram/></a>  
    </div>
  )
}

export default HeaderSocials