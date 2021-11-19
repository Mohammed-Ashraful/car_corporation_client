import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import serviceing from '../../../images/services.png'
import bgs from '../../../images/bgc.jpg'
import './FreeService.css'
const bg = {
  background: `url(${bgs})`,
  backgroundColor: 'rgba(0, 0, 0 , .85)',
  backgroundBlendMode: " darken, luminosity",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "noRepeat"

}

const FreeServicing = () => {
  return (
    <Box style={bg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className='free-service'>
        <Grid item xs={12} md={6}>
          <img src={serviceing} style={{ height: "auto", width: "90%" }} alt="" />
        </Grid>
        <Grid xs={12} md={6} sx={{color:'white'}}>
          <h1>Tire Service</h1>
          <p>A car service can involve up to 50 or more components, systems checks and adjustments including: An engine oil change and/or filter replacement. Checking lights, tyres, exhaust and operations of brakes and steering. Ensuring your engine is 'tuned' to run in its peak condition.</p>
          <div className='service-option'>
            <p> <i className="far fa-check-circle"></i> Auto Repairing</p>
            <p> <i className="far fa-check-circle"></i>Transmission Checkup</p>
            <p> <i className="far fa-check-circle"></i>Vehicle inspection</p>
            <p> <i className="far fa-check-circle"></i>Car Dealer</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FreeServicing;