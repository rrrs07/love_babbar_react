import React, {useState} from 'react'
import Items from './Items'
import './project.css'
import { projects } from '../../data'




const Project = () => {

    const [projectItems, SetMenuItems] = useState(projects)
  return (
    <section className='portfolio section' id='work'>
      <h2 className="section__title text-cs">Projects</h2>
      <p className="section__subtitle">
        My <span>Cases</span>
      </p>

      

      <div className="portfolio__container container grid">
        <Items projectItems={projectItems}/>
      </div>

    </section>
  )
}

export default Project
