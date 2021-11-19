import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
// import { Paper } from '@material-ui/core';
import { Button,Paper } from '@mui/material';



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
  const Item = ({ name, description }) => {
    return (
      <Paper style={{width:300}} >
        <h2>{name}</h2>
        <p>{description}</p>
        <Button>more info...</Button>
      </Paper>
    );
  };


  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Review;