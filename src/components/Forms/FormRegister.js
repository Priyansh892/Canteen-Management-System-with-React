import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignupValidation';
import FormSuccess from './FormSuccess';
import Image from './Images/RegisterLoginCanteen.jpg';
import { Link } from 'react-router-dom';
//import firebase from '../FirebaseBackend/Firebase';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          <img className='form-img' src={Image} alt='Register' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <>
          <FormSuccess/>
          <Link to='/home'> Redirect to home page...</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Form;