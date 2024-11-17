import React, { useEffect } from 'react'
import Banner from './UI/Banner'
import { useGlobalContext } from '../Context'
import Head2 from './UI/Head2'

const Services = () => {

  const {updateServicePage, service} = useGlobalContext()

  useEffect(() => {
    updateServicePage();
  }, [])

  

  return (
    <>
      <Banner/>
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
    </>
  )
}

export default Services