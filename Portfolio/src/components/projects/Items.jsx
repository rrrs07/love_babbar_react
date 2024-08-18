import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png'

const Items = ({projectItems}) => {
  return (
    <>
        {projectItems.map((projectItem) => {
            const{id, img, title,description} = projectItem;
            return(
                <div className="portfolio__items card card-two">
                    <div className="portfolio__img-wrapper">
                        <img src={img} alt="" className="portfolio__img" />
                    </div>

                    <h3 className="portfolio__title">{title}</h3>
                    <p className="portfolio__description">{description}</p>

                    <a href="" className='link'>
                        Live Demo <FaArrowRight className='link__icon'/>
                    </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
                </div>
            )
        })}
    </>
  )
}

export default Items
