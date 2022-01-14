import React, { Component } from 'react';
import './AboutUs.scss';

class AboutUs extends Component {
  render() {
    return (
      <section id='about-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17042365645!2d36.77735676036521!3d-1.3030363541686092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1642130646533!5m2!1sen!2sus'
                  width='500'
                  height='400'
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                    filter: 'hue-rotate(180deg)',
                  }}
                  allowFullScreen=''
                  scrolling='no'
                  frameBorder='0'
                  allow='encrypted-media'
                  title='Chandigarh Engineering College'
                  // loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className='col-md-6'>
              <h3 className='wow fadeInLeft'>
                ABOUT <span className='alpha-heading'>US</span>
              </h3>
              <p
                className='wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.3s'
              >
                {' '}
                <span className='alpha-style'>G</span>ro Maize Farm develops and
                distributes improved maize inbred lines and hybrids to partners
                worldwide. Gro Maize Farm maize breeding work aims at developing
                easy-to-produce, best-bet hybrids, elite maize lines, and
                improved open-pollinated varieties, as well as science-based
                recommendations for varietal targeting and improved productivity
                in target regions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
