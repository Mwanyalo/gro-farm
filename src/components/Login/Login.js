import React from 'react';
import './Login.scss';

function Login(props) {
  return (
    <div className='login-form'>
      <form onSubmit={props.submitHandler}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='form-input'
            type='email'
            name='email'
            id='email'
            value={props.email}
            required={true}
            onChange={props.handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            id='password'
            value={props.password}
            required={true}
            minLength='6'
            onChange={props.handleChange}
          />
        </div>
        <div className='switch'>
          <button className='btn'>LOG IN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
