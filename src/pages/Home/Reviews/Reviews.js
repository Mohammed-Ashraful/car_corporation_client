import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Rating from "react-rating";
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
  const [reviewInfo, SetReviewInfo] = useState({});
  const [rating,setRating]=useState(1)
  const { user, isLoading } = useAuth();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const review = {
      ...reviewInfo,
      rating,
      name: user?.displayName,
      email: user?.email,
    };

    console.log(review);
    // send to the server
    fetch('https://pacific-shore-00017.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Thanks For Your review')
        }
      });


  };


  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewInfo = { ...reviewInfo }
    newReviewInfo[field] = value;
    SetReviewInfo(newReviewInfo); 
  }


  return (
    <Grid container spacing={2}>
      {/* This is order information ,,,Name Email , Local Address , Phone */}
      <Grid item xs={12} md={12} sx={{ mt: 8, mb: 5 }}>
        <Typography variant="h4" color="#53b57f" gutterBottom component="div">
          Review
        </Typography>
        {!isLoading && (
          <form onSubmit={handleOnSubmit}>
            <TextField
              sx={{ width: "70%", mt: 2 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              defaultValue={user?.displayName}
              // variant="standard"
            />

            <TextField
              sx={{ width: "70%", mt: 2 }}
              id="standard-basic"
              label="Your email"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user?.email}
              // variant="standard"
            />

            <TextField
              sx={{ width: "70%", mt: 2 }}
              id="standard-basic"
              label="Review"
              name="review"
              onBlur={handleOnBlur}
              type="text"
              // variant="standard"
            required
            />
            <br />
            <Rating
              style={{ color: "gold", fontSize: "26px" }}
              emptySymbol="fa-regular fa-star"
              fullSymbol="fa-solid fa-star"
              onChange={(rate) => setRating(rate)}
              required
            />
            <br />
            <Button
              sx={{ width: "70%", mt: 2 }}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        )}

        {isLoading && <CircularProgress />}
      </Grid>
    </Grid>
  );
};

export default Reviews;