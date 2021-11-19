import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Car = props => {
  const { name, model, info, price, img, _id } = props?.car;
  return (
    <Card sx={{
      maxWidth: 345, padding: "10px", boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Model : {model}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
       Price :  ${price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {info.slice(1,180)}
        </Typography>
      <Stack spacing={8} direction="row" sx={{marginLeft:'30%',marginTop:'10px'}}>
         
          <Link
            to={`/car/${_id}`}><Button variant="contained">Buy now</Button></Link>

      </Stack>
      </CardContent>
    </Card>
  );
};

export default Car;