import React from 'react'
import { Link } from 'react-router-dom';
import Para from './Para';
import { FaArrowRightLong } from "react-icons/fa6";
import { useGlobalContext } from '../../Context';

const Banner = () => {

  const {heading, description, bImg} = useGlobalContext();

  return (
    <section className='pad80 overflow-hidden bannersec'>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <div className='banner-content h-100 d-flex'>              
              <h1 data-aos="fade-up" data-aos-delay="10" data-aos-duration="1000" data-aos-easing="ease">{heading}</h1>              
              <Para>
                  {description}
              </Para>
              <div className='connect-btn' data-aos="fade-up" data-aos-delay="10" data-aos-duration="1000" data-aos-easing="ease">
                <Link to="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn rounded-0 bgcolor">Connect with us <FaArrowRightLong className='icons-arrow' /></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='banner-img'>
              <img data-aos="flip-right" data-aos-duration="1000" data-aos-easing="ease" src={bImg} alt="TechWeb banner" className='w-100'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner