import React from 'react';
import validate from './validateInfoLogin';
import useForm from './useFormLogin';
import './Form.css';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../Context/AuthProvider';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm,validate);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>

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
        
      
        <button className='form-input-btn' type='submit'>
          Sign in
        </button>
        <span className='form-input-login'>
          Don't have an account? <Link className='link' to='/Register'><li> Register here</li></Link>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;