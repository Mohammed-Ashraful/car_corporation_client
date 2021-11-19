import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPage from '../../../images/404-page.png'
import './NotFound.css'

const NotFound = () => {
 
  return (
    <div className='notFound'>
      <img src={notFoundPage} className='notFoundImg' alt='Page Not Found' />
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>  <Button className='Button' sx={{ marginTop: '-450px', backgroundColor: 'white', padding: '10px 60px', fontSize: '30px'}} color="inherit">Back Home</Button></Link>
    </div>
  );
};

export default NotFound;