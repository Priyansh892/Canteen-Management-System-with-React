import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLoginValidation';
import FormSuccess from './FormSuccess';
import Image from './Images/RegisterLoginCanteen.jpg';
import { Link } from "react-router-dom"
//import firebase from '../FirebaseBackend/Firebase';
const Login= () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={Image} alt='Login' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          // <FormSuccess/>
          <Link to='/home'>YOUR LOGIN IS SUCCESSFUL, GO TO HOME PAGE</Link>
        )}
      </div>
    </>
  );
};
export default Login;
