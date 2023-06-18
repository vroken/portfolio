import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const ExperienceEmbedded = () => {
  return (
    <div className="experience__content">
        <article className="experience__details">
            <BsCheckCircleFill className='experience__detail-icon'/>
            <div>
              <h4>Mikrokontroller</h4>
              <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <BsCheckCircleFill className='experience__detail-icon'/>
            <div>
              <h4>Proteus</h4>
              <small className="text-light">Experienced</small>
            </div>
        </article><article className="experience__details">
            <BsCheckCircleFill className='experience__detail-icon'/>
            <div>
              <h4>Eagle</h4>
              <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <BsCheckCircleFill className='experience__detail-icon'/>
            <div>
              <h4>Internet of Things</h4>
              <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <BsCheckCircleFill className='experience__detail-icon'/>
            <div>
              <h4>C++</h4>
              <small className="text-light">Experienced</small>
            </div>
        </article>
    </div>
  )
}

export default ExperienceEmbedded