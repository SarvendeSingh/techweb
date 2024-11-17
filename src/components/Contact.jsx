import React, { useState } from 'react';
import Head2 from './UI/Head2';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnqvkzd"); // Replace "yourFormspreeID" with your actual Formspree ID
  const [successMessage, setSuccessMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e); // Submit form data

    console.log(result);
    
    if (state?.succeeded) {
      setSuccessMessage("Thank you for contacting us! We'll get back to you shortly.");
    }
  };

  return (
    <section className="pad80">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto text-center">
            <Head2>Contact Us</Head2>
            {successMessage ? (
              <p className="text-success mt-4">{successMessage}</p>
            ) : (
              <form onSubmit={handleForm}>
                <div
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <input
                    type="text"
                    className="form-control form-input"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <input
                    type="tel"
                    className="form-control form-input"
                    name="phonenumber"
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{10}"
                  />
                  <ValidationError
                    prefix="Phone Number"
                    field="phonenumber"
                    errors={state.errors}
                  />
                </div>
                <div
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <input
                    type="email"
                    className="form-control form-input"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message..."
                    rows={5}
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className="btn formbtn mt-4"
                  
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          
        </div>
        <div className='mt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5026.948322547573!2d77.07280708630938!3d28.589149573502148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b3f0aa163db%3A0xe43ee67d0a575def!2sPalam%20Village%2C%20Palam%2C%20Delhi!5e1!3m2!1sen!2sin!4v1731748576116!5m2!1sen!2sin" width="100%" height="500" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
