export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if (!/^[A-Za-z]+/.test(values.username.trim())) {
      errors.username = 'Enter a valid name';
    }
    
    else if(values.username!=="Ayushman")
    {
        errors.username='Invalid Name';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } 
    else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    else if(values.password!=='1234567')
    {
        errors.password='Invalid Password';
    }

    return errors;
  }
