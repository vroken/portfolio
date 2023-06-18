import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {AiOutlineUser} from 'react-icons/ai'
import {CgOrganisation} from 'react-icons/cg'
import {MdWorkOutline} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><CgOrganisation/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar/></a>
    </nav>
  )
}

export default Nav