import { Button, Grid, TextField, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddCar = () => {
  const [addedCar, SetOrderInfo] = useState({});
  const { isLoading } = useAuth();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const car = {
      ...addedCar,
    }

    // send to the server
    fetch('https://safe-tundra-89323.herokuapp.com/car', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(car)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

        }
        console.log(data)
      });


  };


  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newCar = { ...addedCar }
    newCar[field] = value;
    SetOrderInfo(newCar)
  }

  return (
    <Grid container spacing={2}>
      {/* This is order information ,,,Name Email , Local Address , Phone */}
      <Grid item xs={12} md={6} sx={{ mt: 8 }} >
        <Typography variant="h4" color='#53b57f' gutterBottom component="div">
          Add a new Car
        </Typography>
        {
          !isLoading &&
          <form onSubmit={handleOnSubmit}>

            <TextField
              sx={{ width: '70%', mt: 2 }}
              id="standard-basic"
              label="Images"
              name='img'
              onBlur={handleOnBlur}
              type='text'
              variant="standard" />
            <TextField
              sx={{ width: '70%', mt: 2 }}
              id="standard-basic"
              label="Name"
              name='name'
              onBlur={handleOnBlur}
              type='text'
              variant="standard" />

            <TextField
              sx={{ width: '70%', mt: 2 }}
              id="standard-basic"
              label="Model"
              name='model'
              onBlur={handleOnBlur}
              type='text'
              variant="standard" />

            <TextField
              sx={{ width: '70%', mt: 2 }}
              id="standard-basic"
              label="Price"
              name='price'
              onBlur={handleOnBlur}
              type='number'
              variant="standard" />
            <TextField
              sx={{ width: '70%', mt: 2 }}
              id="standard-basic"
              label="Info"
              name='info'
              onBlur={handleOnBlur}
              type='text'
              variant="standard" />

            <Button
              sx={{ width: '70%', mt: 2 }}
              type='submit'
              variant="contained"
              color="secondary"
            >Submit</Button>

          </form>
        }

        {
          isLoading && <CircularProgress />
       }
      </Grid>


    </Grid>
  );
};

export default AddCar;