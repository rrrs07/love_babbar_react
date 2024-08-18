import React from 'react'
import { cv } from '../../data'
import Card from '../resume/Card'
import './resume.css'

const Resume = () => {
  return (
    <section className='resume section' id='resume' >
      <h2 className="section__title resume_title text-cs">Education</h2>
      
      <div className='resume__container container grid'>
        <div className="resume__group">

            <div className="resume__item">
                {cv.map((val,id) => {
                    if(val.category === 'education'){
                        return(
                            <Card key={id} 
                            title={val.title}
                            subtitle={val.subtitle} 
                            date={val.date} 
                            description={val.description}
                            />
                        )
                    }
                })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
