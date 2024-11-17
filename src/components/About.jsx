import React, { useEffect } from 'react'
import Banner from './UI/Banner'
import Para from './UI/Para'
import Head2 from './UI/Head2'
import aboutImg2 from "../assets/about-us-2.jpg"
import { useGlobalContext } from '../Context'

const About = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, [])

  return (
    <>
      <Banner/>

      <section className="pad80 bgcolor about-2">
        <div className="container">
          <Head2>Who We Are</Head2>
          <Para>
            TechWeb is a full-service technology company committed to revolutionizing how businesses leverage digital advancements. Founded with the mission to bridge the digital divide, we help organizations of all sizes navigate the evolving technological landscape.
          </Para>
          
          <div className='about-us-2'>
            <img src={aboutImg2} alt="about us 2" className='w-100 rounded' data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease"/>
          </div>
          
        </div>
    </section>


    <section className="pad80 extra-data">
        <div className="container">
          <div className='row'>
              <div className='col-md-6'>
                <div className='about-mission rounded'>
                <Head2>Our Mission</Head2>
          <Para>
          Our mission is simple: to deliver innovative and efficient technology solutions that solve real-world business problems. By combining cutting-edge technology with creative thinking, we help businesses stay ahead of the curve in an increasingly digital world.
          </Para>
                </div>
              </div>
              <div className='col-md-6'>
              <div className='about-mission rounded'>
              <Head2>Our Vision</Head2>
          <Para>
          At TechWeb, we envision a future where businesses and individuals are empowered by technology to achieve their fullest potential. We strive to be a trusted partner for organizations looking to make the most of emerging technologies while maintaining a strong focus on user-centric designs and solutions.
          </Para>
              </div>
              </div>
              <div className='col-md-12 mt-5'>
                <div className='about-mission rounded'>
                <Head2>Our Values</Head2>
          <Para>
          We believe in innovation, collaboration, and integrity. Our team is passionate about what we do, and we are committed to delivering high-quality solutions that not only meet but exceed our clients' expectations. We value:
          </Para>
          <ul data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease">
              <li>Integrity and Transparency</li>
              <li>Commitment to Excellence</li>
              <li>Customer-Centric Approach</li>
              <li>Continuous Learning and Improvement</li>
            </ul>
                </div>

             

              </div>
          </div>
          
          
          
        </div>
    </section>

    <section className="pad80 extra-data journey-data">
        <div className="container">
          <div className='row'>
              
              <div className='col-md-12 '>
                <div className='why-choose rounded'>
                <Head2>Why Choose Us?</Head2>
          <Para>
          With years of experience and a team of dedicated experts, TechWeb is the ideal partner for your technology journey. Here’s why our clients trust us:
          </Para>
          <ul data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-easing="ease">
              <li>Proven Track Record of Success</li>
              <li>Innovative and Tailored Solutions</li>
              <li>Transparent and Collaborative Process</li>
              <li>End-to-End Support from Strategy to Execution</li>
            </ul>
                </div>

             

              </div>

              <div className='col-md-12 mt-5'>
                <div className='why-choose rounded'>
                <Head2>Our Journey</Head2>
          <Para>
          Founded in 2024, TechWeb started as a small group of passionate technologists who shared a vision of making technology more accessible to businesses. Over the years, we've grown into a full-fledged technology partner, trusted by clients across various industries. Today, we continue to push boundaries and innovate, delivering impactful solutions that drive success.
          </Para>
         
                </div>

             

              </div>

          </div>
          
          
          
        </div>
    </section>

    </>
  )
}

export default About