import React from 'react'
import './experience.css'
import ExperienceFrontEnd from './ExperienceFrontEnd'
import ExperienceEmbedded from './ExperienceEmbedded'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Skill</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <ExperienceFrontEnd/>
        </div>
        <div className="experience__iot">
          <h3>Embedded System's</h3>
          <ExperienceEmbedded/>
        </div>
      </div>
    </section>
  )
}

export default Experience