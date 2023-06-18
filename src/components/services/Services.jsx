import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>what I do while I was a student</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Embedded System's</h3>
            <h6>-Tunas Farm-</h6>
          </div>
          
          <ul className="service__list">
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Design and implement hardware and schematic design for proof of concept, also proof of value
                on Smart Farming IoT products</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Carry out testing and assessments on system performance with respect to requirements</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Doing schematic design for the PCB that will be used</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Develop and implement software of embedded devices and systems</p>
              </li>
          </ul>
        </article>
        {/* END UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Kredensial Mikro Mahasiswa Indonesia (KMMI)</h3>
            <h6>-Kampus Merdeka-</h6>
          </div>
          
          <ul className="service__list">
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Designing computer network systems</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Managing computer network systems in an organization</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Determine Internet protocol (IP) addressing for a computer network</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Analyzing computer network technology</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Considering the design of computer network systems</p>
              </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Himpunan Mahasiswa Sistem Komputer</h3>
          </div>
          
          <ul className="service__list">
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Responsible for social media content</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Provide information about organizational activities</p>
              </li>
              <li>
                <BiCheck className='serive__list-icon'/>
                <p>Identify and adapt organizational policies to the public interest.</p>
              </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services