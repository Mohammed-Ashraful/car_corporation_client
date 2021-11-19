import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const TotalCar = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const uri = ('https://safe-tundra-89323.herokuapp.com/car')

    fetch(uri)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [])
  return (
    <>
      <Typography sx={{ marginTop: '0px', padding: ' 20px 0px' }} gutterBottom variant="h3" component="div">
        <span className='car-title'>
          Our All New Cars
        </span>

      </Typography>

      <Box className='car-container'>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{
          columnGap: 5,
          rowGap: 8
        }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {product.map((car) => (
            <Car
              key={car.id}
              car={car}
            ></Car>
          ))}
        </Grid>
      </Box>
    </>


  );
};

export default TotalCar;