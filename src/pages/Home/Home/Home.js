import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import FreeServicing from '../FreeServicing/FreeServicing';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const Home = ({product,setProduct}) => {
  return (
    <div>
      <div>
        {!product.length && (
          <Box>
            <CircularProgress
              style={{
                marginTop: "40vh",
              }}
              size={80}
              thickness={1.5}
            />
          </Box>
        )}
      </div>
      {product.length ? (
        <div>
          <Navigation></Navigation>
          <FreeServicing></FreeServicing>
          <Product product={product} setProduct={setProduct}></Product>
          <Review></Review>
          <Reviews></Reviews>
          <Footer></Footer>
        </div>
      ) : (
        <div>
          <Product product={product} setProduct={setProduct}></Product>
        </div>
      )}
    </div>
  );
};

export default Home;