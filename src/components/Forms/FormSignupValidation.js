import React from 'react';
import validate from './validateInfoRegister';
import useForm from './useFormRegister';
import './Form.css';
import {Link } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm,validate);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Register with us for a better Experience !!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            id='Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Mobile number</label>
          <input
            className='form-input'
            type='Number'
            name='Mobile'
            placeholder='Enter the mobile number'
            id='Mobile'
            value={values.Mobile}
            onChange={handleChange}
          />
          {errors.Mobile && <p>{errors.Mobile}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            id='Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            id='Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            id='CPassword'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
      
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? <Link className='link' to='/SignIn'><li> Login here</li></Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;