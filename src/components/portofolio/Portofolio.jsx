import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Data = [
  {
      id: 1,
      image: IMG1,
      title: 'without rel="noreferrer" (which implies) is a security',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19043016-Circle-Mobile-App-Animation'
  },
  {
      id: 2,
      image: IMG2,
      title: 'without rel="noreferrer" (which implies) is a security',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19043016-Circle-Mobile-App-Animation'
  },
  {
      id: 3,
      image: IMG3,
      title: 'without rel="noreferrer" (which implies) is a security',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19043016-Circle-Mobile-App-Animation'
  },
  {
      id: 4,
      image: IMG4,
      title: 'without rel="noreferrer" (which implies) is a security',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19043016-Circle-Mobile-App-Animation'
  },
  {
      id: 5,
      image: IMG5,
      title: 'without rel="noreferrer" (which implies) is a security',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19043016-Circle-Mobile-App-Animation'
  },
  {
      id: 6,
      image: IMG6,
      title: 'without rel="noreferrer" (which implies) is a security',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19043016-Circle-Mobile-App-Animation'
  },
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          Data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portofolio__items">
              <div className="portofolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio