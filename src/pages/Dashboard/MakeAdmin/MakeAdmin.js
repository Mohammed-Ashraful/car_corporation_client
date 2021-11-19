import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const handleOnBlur = e => {
    setEmail(e.target.value)
  }
  const handleAdminSubmit = e => {
    const user = { email };
    fetch('https://safe-tundra-89323.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    e.preventDefault();
  }
  return (
    <form onSubmit={handleAdminSubmit}>
      <h1>Please Make an Admin</h1>
      <TextField onBlur={handleOnBlur} fullWidth label="Email" id="fullWidth" />
      <Button type='submit' variant='contained'> Make Admin</Button>
    </form>
  );
};

export default MakeAdmin;