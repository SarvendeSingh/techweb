import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm("mnnqvkzd");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e); // Wait for the form submission
    console.log(result);
    
    if (state?.succeeded) {
      setSuccessMessage("Thanks for joining!");
    }
  };
   

  return (
    <>
    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content position-relative">
          <div className="modal-header">            
            <button type="button" className="btn-close poupclose" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <div className="modal-body">
              {successMessage ? (
                <p className="text-success">{successMessage}</p>
              ) : (
                <form onSubmit={handleForm} method="POST">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      autoComplete="off"
                      placeholder="Name"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      placeholder="Email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      name="phonenumber"
                      autoComplete="off"
                      placeholder="Phone number"
                      required
                    />
                    <ValidationError
                      prefix="Phone Number"
                      field="phonenumber"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    type="submit"
                    value="send"
                    className="btn formbtn"
                    disabled={state.submitting}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>      
        </div>
      </div>
    </div>

    <div className='bgcolor pad80 footer'>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className='footer-logo-data'>
              <Link to={'/'}>
                <img src={logo} alt="TechWeb Logo" className="footer-logo" />
              </Link>
              <p>TechWeb is committed to bridging technology and innovation, providing leading-edge solutions that empower businesses to thrive in a digital world.</p>

            

              </div>
            </div>

            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/policy">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p className='conact-info'>Email: info@techweb.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Innovation Lane, Tech City, Gurugram</p>
            </div>

            <div className="col-lg-8 col-md-6">
            <h5 className='mt-4'>Follow Us</h5>
              <ul className='social-icon list-inline'>
                <li className="list-inline-item"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li className="list-inline-item"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a></li>
              </ul>
              
            </div>

            <div className="col-lg-4 col-md-5 text-center position-relative">
              <p className='copyright'>© 2024 TechWeb. All rights reserved.</p>
            </div>

            
          </div>

          
        </div>
      </div>
    </>
    
  )
}

export default Footer