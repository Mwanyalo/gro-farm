import React, { Component } from 'react';
import './ContactUs.scss';

class ContactUs extends Component {
  render() {
    return (
      <section id='contact'>
        <div className='container'>
          <div
            className='row wow fadeIn'
            data-wow-duration='2s'
            data-wow-delay='0.3s'
          >
            <div className='col-md-6'>
              <div id='sm-section'>
                <span className='tagline'> Feel free to contact us</span>
                <br />
                <span className='fas fa-map-marker-alt'>
                  <p>Nairobi Kenya</p>
                </span>
                <br />
                <span className='fas fa-phone'>
                  <p>+254 308 137539, +254 335 1351446</p>
                </span>
                <br />
                <br />
              </div>
            </div>
            <div className='col-md-6'>
              <h3>
                CONTACT <span className='alpha-heading'>US</span>
              </h3>
              <form action='index.html' className='contact-form' method='POST'>
                <input
                  type='text'
                  className='contact-form-text'
                  placeholder='Your Name'
                />
                <input
                  type='mail'
                  className='contact-form-text'
                  placeholder='Your Email'
                />
                <input
                  type='text'
                  className='contact-form-text'
                  placeholder='phone number'
                />
                <textarea
                  className='contact-form-text'
                  placeholder='Your message'
                ></textarea>
                <input
                  type='submit'
                  className='button contact-form-btn'
                  value='send'
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
