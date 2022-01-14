import React, { Component } from 'react';
import './Home.scss';
import AboutUs from '../../components/AboutUs/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';

class Home extends Component {
  render() {
    return (
      <>
        <section id='home'>
          <div className='carousel-inner'>
            <img
              className='d-block w-100'
              src='/static/images/maize.jpg'
              alt='Home'
            />
            <div className='carousel-caption d-none d-md-block '>
              <h2 className='wow fadeIn'>
                Gro Maize <span>Farm</span>
              </h2>
              <span className='tagline'>A decade of world leading Maize</span>
            </div>
          </div>
        </section>
        <AboutUs />
        <ContactUs />
      </>
    );
  }
}

export default Home;
