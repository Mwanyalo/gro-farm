import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
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
    );
  }
}

export default Home;
