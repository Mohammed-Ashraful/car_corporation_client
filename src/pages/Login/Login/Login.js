import { Button, CircularProgress, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import loginPhoto from '../../../images/logo.png';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { isLoading, loginUser, user, error } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    setLoginData(newLoginData)
  }
  const handleOnSubmit = e => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history)
  }
  return (

    <Grid container spacing={2}>

      <Grid item xs={12} md={6} sx={{ mt: 8 }} >
        <Typography variant="h4" gutterBottom component="div">
          Please Login
        </Typography>
        {!isLoading &&
          <form onSubmit={handleOnSubmit}>

            <TextField

              sx={{ width: '70%', mt: 5 }}
              id="standard-basic"
              label="Your email"
              name='email'
              onChange={handleOnChange}
              variant="standard" />

            <TextField

              sx={{ width: '70%', mt: 5 }}
              id="standard-basic"
              label="Password"
              name='password'
              onChange={handleOnChange}
              type='password'
              variant="standard" />
            <Button
              sx={{ width: '70%', mt: 5 }}
              type='submit'
              variant="contained">Login</Button>
            <NavLink to='/register' style={{ fontSize: '20px', textDecoration: 'none' }}>
              <Button

                variant="text">New user ?? Please Register</Button>
            </NavLink>
          </form>
        }

        {
          isLoading && <CircularProgress color="secondary" />
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

export default Login;
