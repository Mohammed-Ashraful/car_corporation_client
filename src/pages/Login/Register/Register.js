import { Button, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginPhoto from '../../../images/logo.png';


const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, error } = useAuth();


  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    setLoginData(newLoginData)
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if (loginData.password !== loginData.ConfirmPassword) {
      alert('Password did not match ');
      return;
    }
    registerUser(loginData.email, loginData.password,loginData.name, history);
  }
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={6} sx={{ mt: 8 }} >
        <Typography variant="h4" gutterBottom component="div">
          Please Register
        </Typography>
        {
          !isLoading &&
          <form onSubmit={handleOnSubmit}>

            <TextField
              sx={{ width: '70%', mt: 5 }}
              id="standard-basic"
              label="Your Name"
              name='name'
              onBlur={handleOnBlur}
              variant="standard" />
            <TextField
              sx={{ width: '70%', mt: 5 }}
              id="standard-basic"
              label="Your email"
              name='email'
              onBlur={handleOnBlur}
              variant="standard" />

            <TextField
              sx={{ width: '70%', mt: 5 }}
              id="standard-basic"
              label="Password"
              name='password'
              onBlur={handleOnBlur}
              type='password'
              variant="standard" />

            <TextField
              sx={{ width: '70%', mt: 5 }}
              id="standard-basic"
              label="Confirm Password"
              name='ConfirmPassword'
              onBlur={handleOnBlur}
              type='password'
              variant="standard" />

            <Button
              sx={{ width: '70%', mt: 5 }}
              type='submit'
              variant="contained">Register</Button>
            <NavLink to='/login' style={{ fontSize: '20px', textDecoration: 'none' }}>
              <Button
                variant="text">Already registered ?? Please login</Button>
            </NavLink>
          </form>
        }

        {
          isLoading && <CircularProgress />
        }
        {
          user?.email && <Alert severity="success"> {user?.email}  - User is Added successfully</Alert>
        }
        {error && <Alert severity="error"> {error}</Alert>}
      </Grid>
      
      <Grid item xs={12} md={6}>
        <img src={loginPhoto} width='100%' alt='Login phot' />
      </Grid>

    </Grid>
  );
};

export default Register;