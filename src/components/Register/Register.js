import React from 'react';
import './Register.scss';

function Register(props) {
  return (
    <div className='register-form'>
      <form onSubmit={props.submitHandler}>
        <div className='form-group'>
          <label htmlFor='username'>Full Name</label>
          <input
            className='form-input'
            type='name'
            name='fullName'
            id='username'
            minLength={3}
            value={props.fullName}
            required={true}
            onChange={props.handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            className='form-input'
            type='number'
            name='phone'
            id='phone'
            minLength={3}
            value={props.phone}
            required={true}
            onChange={props.handleChange}
          />
        </div>
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
          <button className='btn'>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
