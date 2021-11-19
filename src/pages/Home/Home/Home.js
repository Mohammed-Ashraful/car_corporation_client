import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import FreeServicing from '../FreeServicing/FreeServicing';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <FreeServicing></FreeServicing>
      <Product></Product>
      <Review></Review>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;