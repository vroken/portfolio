import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact} from 'react-icons/si'

const ExperienceFrontEnd = () => {
  return (
    <div className="experience__content">
        <article className="experience__details">
            <AiFillHtml5 className='experience__detail-icon'/>
            <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <DiCss3 className='experience__detail-icon'/>
            <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <BsFillBootstrapFill className='experience__detail-icon'/>
            <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <IoLogoJavascript className='experience__detail-icon'/>
            <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
            </div>
        </article>
        <article className="experience__details">
            <SiReact className='experience__detail-icon'/>
            <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
            </div>
        </article>
    </div>
  )
}

export default ExperienceFrontEnd