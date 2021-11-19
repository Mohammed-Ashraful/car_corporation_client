import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
// import { Paper } from '@material-ui/core';
import { Button,Paper } from '@mui/material';
import { minHeight } from '@mui/system';



const Review = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch('https://safe-tundra-89323.herokuapp.com/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [reviews])


  const items = [
    {
      name: 'Aya Bouchiha',
      description: 'Full Stack Web Developer',
    },
    {
      name: 'John Doe',
      description: 'Author',
    },
    {
      name: 'Pitsu Coma',
      description: 'Math Student',
    },
  ];
  const Item = ({ name, email ,review,rating }) => {
    // it will change dynamically
    return (

      <Paper style={{ width:'50%' ,margin:'0 auto' , minHeight:'300px',backgroundColor:'whitesmoke' ,padding:'40px 20px'}} >
        <h2>Name :{name}</h2>
        <h4>Email :{email}</h4>
        <p>{review}</p>
        <p>Rating :{rating}</p>
      </Paper>
    );
  };


  return (
    <div>
      <Carousel>
        {reviews?.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Review;