import React, { useEffect } from 'react'
import bannerImg from "../assets/hero.svg";
import Para from './UI/Para';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Banner from './UI/Banner';
import Head2 from './UI/Head2';
import { useGlobalContext } from '../Context';
import SwiperSlider from './UI/Swiper';
import testimonialImg from '../assets/Placeholder_Person.jpg';

const Home = () => { 

  const {updateHomePage, service}  = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, [])

  
  return (
    <>    
    <Banner />

    <section className='pad80 about-us'>
      <div className="container h-100">
        <div className="about-us-data h-100 d-flex">
            <Head2>About TechWeb</Head2>
            <Para>
            TechWeb was founded to bridge the digital knowledge gap between small businesses and large enterprises. We’ve grown into a comprehensive, full-service technology partner, blending cutting-edge advancements with impactful design and human insight. Our collaborative approach, strengthened by strategic partnerships with industry experts, enables us to serve as a complete solutions provider for all digital needs. At TechWeb, our enduring client relationships reflect our commitment to excellence, trust, and our shared dedication to driving growth together.
            </Para>
        </div>
      </div>
    </section>

    <SwiperSlider/>

    <div className='bgcolor pad80 service-main'>
            <div className="container">
              <div className="text-center">
              <Head2 >From Vision to Reality: Empowering <br className='d-none d-md-block'/> Businesses with Digital Innovation</Head2>

              </div>
              <div className="row">
                {
                  service.length > 0 ? (
                    service.map(item => (<div key={item.id} className="col-lg-4 col-md-6">
                      <div className='service-data rounded overflow-hidden' data-aos="fade-up" data-aos-delay="10" data-aos-duration="1000" data-aos-easing="ease">
                        <div className='service-img over-flow-hidden'>
                          <img src={item.image} alt={item.title} className='w-100'/>
                        </div>
                        <h3 className='title'>{item.title}</h3>
                        <p className='description'>{item.description}</p>    
                      </div>
                    </div>)) 
                  ) : (<h3>No Data Avialable</h3>)
                }
              </div>
            </div>
        </div>

    
        <section className='pad80 testimonial_main'>
        <div className="container">
          <div className='text-center'>
            <Head2>What Our Clients Say</Head2>
          </div>
          <div className="row">
  <div className="col-md-4">
    <div className='position-relative testimonial_data anime' style={{animationDelay: '0s'}}>
      <span className='testimg'>
        <img src={testimonialImg} alt="testimonial" />
      </span>
      <blockquote>"TechWeb helped us innovate and streamline our processes. Their services are top-notch!"</blockquote>
      <footer>- Anand Kapoor</footer>
    </div>
  </div>
  <div className="col-md-4">
    <div className='position-relative testimonial_data anime' style={{animationDelay: '0.5s'}}>
      <span className='testimg'>
        <img src={testimonialImg} alt="testimonial" />
      </span>
      <blockquote>"Incredible team and amazing results. We couldn’t be happier with TechWeb!"</blockquote>
      <footer>- Evan Dev</footer>
    </div>
  </div>
  <div className="col-md-4">
    <div className='position-relative testimonial_data anime' style={{animationDelay: '0.9s'}}>
      <span className='testimg'>
        <img src={testimonialImg} alt="testimonial" />
      </span>
      <blockquote>"TechWeb is our go-to partner for all things tech. They always deliver!"</blockquote>
      <footer>- V.D Kumar</footer>
    </div>
  </div>
</div>

        </div>
      </section>


    </>

  )
}

export default Home