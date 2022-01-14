import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <section id='my-nav'>
          <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='fas fa-align-justify'></i>
              </button>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav ml-auto '>
                  <a className='nav-item nav-link ' href='/home#home'>
                    Home
                  </a>
                  <a className='nav-item nav-link' href='/home#about-us'>
                    About us
                  </a>
                  <a className='nav-item nav-link' href='/home#contact'>
                    Contact us
                  </a>
                  <a className='nav-item nav-link' href='/login'>
                    Log In
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
