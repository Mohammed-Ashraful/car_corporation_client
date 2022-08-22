import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import Car from "../Car/Car";
import "./Product.css";

const Product = ({ product, setProduct }) => {
  useEffect(() => {
    const uri = "https://pacific-shore-00017.herokuapp.com/car";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProduct(data.slice(0, 6))
      });
  }, [setProduct]);
  return (
    <>
      {product.length ? (
        <>
          <Typography
            sx={{ marginTop: "0px", padding: " 20px 0px" }}
            gutterBottom
            variant="h3"
            component="div"
          >
            <span className="car-title">Our All New Cars</span>
          </Typography>

          <Box className="car-container">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              sx={{
                columnGap: 5,
                rowGap: 8,
              }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {product.map((car) => (
                <Car key={car.id} car={car}></Car>
              ))}
            </Grid>
          </Box>
        </>
      ):<></>}
    </>
  );
};

export default Product;
