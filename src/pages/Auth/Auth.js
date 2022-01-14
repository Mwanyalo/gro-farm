import React, { Component } from 'react';
import './Auth.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
    };
  }

  switchForm = (type) => {
    this.setState({ option: type });
  };

  showForm = () => {
    switch (this.state.option) {
      case 2:
        return <Register />;
      case 3:
        return <Login />;
      default:
        return <Login />;
    }
  };

  render() {
    const { option } = this.state;
    return (
      <div className='auth-container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div
                className='bg-image left-section'
                style={{
                  backgroundImage:
                    'url(https://mdbootstrap.com/img/Photos/Others/images/76.jpg)',
                }}
              ></div>
            </div>
            <div className='col-md-6'>
              <div className='right-section'>
                <div className='auth-form'>
                  <header>
                    <div
                      className={
                        'header-options ' +
                        (option === 1
                          ? 'log-in'
                          : option === 2
                          ? 'register'
                          : 'forgot')
                      }
                    >
                      <span>Log in to your account</span>
                      <span>Create an account</span>
                      <span>Reset your password</span>
                    </div>
                  </header>
                  <ul className='form-options'>
                    <li
                      className={option === 1 ? 'active' : ''}
                      onClick={() => this.switchForm(1)}
                    >
                      Log in
                    </li>
                    <li
                      className={option === 2 ? 'active' : ''}
                      onClick={() => this.switchForm(2)}
                    >
                      Register
                    </li>
                    <li
                      className={option === 3 ? 'active' : ''}
                      onClick={() => this.switchForm(3)}
                    >
                      Forgot
                    </li>
                  </ul>
                  {this.showForm()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
