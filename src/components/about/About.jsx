import React from 'react'
import './About.css'
import ME from '../../assets/M1.jpg'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {TbCertificate} from 'react-icons/tb'
import {HiOutlineDocumentText} from 'react-icons/hi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <MdOutlineWorkOutline className="about__icon"/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about__card">
            <TbCertificate className="about__icon"/>
            <h5>Certificates</h5>
            <small>10+ Certificate</small>
          </article>

          <article className="about__card">
            <HiOutlineDocumentText className="about__icon"/>
            <h5>Projects</h5>
            <small>5+ Projects</small>
          </article>
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate aperiam at, aspernatur accusantium, est, doloremque quod maiores blanditiis odit magnam sunt! Sapiente praesentium atque numquam saepe illum aut fugit obcaecati.</p>

        <a href="#contact" className='btn btn-primary'>Learn More</a>
      </div>
      </div>
      
    </section>
  )
}

export default about