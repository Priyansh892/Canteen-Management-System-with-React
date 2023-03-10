export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if (!/^[A-Za-z]+/.test(values.username.trim())) {
      errors.username = 'Enter a valid name of only A-Z';
    }

    if(!values.Mobile)
    {
      errors.Mobile='Mobile number is required';
    }
    else if(values.Mobile.length!==10)
    {
      errors.Mobile='Enter a valid mobile number of 10 digits';
    }
	  else if (! ("/^[0-9]*$/", values.Mobile) ) {  
      errors.Mobile='Only numeric values are allowed';
    } 
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }