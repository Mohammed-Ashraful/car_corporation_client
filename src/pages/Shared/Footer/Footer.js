import React from "react";
import img from "../../../images/footer-bg.jpg";
import logo from "../../../images/footer-logo.png";
import "./Footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const bg = {
  background: `url(${img})`,
  backgroundColor: "rgba(0, 0, 0 , .9)",
  backgroundBlendMode: " darken, luminosity",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "noRepeat",
};
const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, color: "white", marginBottom: "0" }}>
      <Grid style={bg} container spacing={2} className="background">
        <Grid item xs={12} md={6} lg={4}>
          <img src={logo} alt="" srcSet="" />
          <div>
            <p
              style={{
                lineHeight: "35px",
                fontFamily: "cursive",
                fontWeight: "100",
                fontSize: "18px",
                marginTop: "-70px",
              }}
            >
              {" "}
              Car Corporation is the best Shop to buy a car. Our company is so
              reliable and responsible to give e best car to Our Customers. And,
              Alhamdulillah we can give the best car.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className="address">
            <h1> OVERVIEW </h1>
            <div className="center-align">
              <p>About</p>
              <p>Contact</p>
              <p>Terms of Condition</p>
              <p> Privacy policy</p>
              <p>Help</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className="address">
            <h1>ADDRESS </h1>
            <p>
              <i className="fas fa-map-marker-alt"></i> Mirpor 10 ,street 63
              Dhaka{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-mobile-alt"></i> 01727231618{" "}
            </p>
            <p>
              <i className="fab fa-whatsapp"> 01729308247</i>{" "}
            </p>
            <p>
              <i className="far fa-envelope-open"> info@car.com</i>
            </p>
            <p>
              <i className="far fa-envelope-open"> support@car.com</i>
            </p>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0 , .7)",
          padding: "30px 0px",
          fontSize: "18px",
        }}
      >
        <span>
          Copyright &copy; 2021 Car Corporation. Designed By{" "}
          <b style={{ fontWeight: "900", fontSize: "25px", marginTop: "10px" }}>
            {" "}
            ASHRAFUL{" "}
          </b>
        </span>
      </div>
    </Box>
  );
};

export default Footer;
