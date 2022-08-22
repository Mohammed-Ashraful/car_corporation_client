import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Rating from "react-rating";


const Review = () => { 
  const [steps, setSteps] = useState([]); 
  useEffect(() => {
    fetch("https://pacific-shore-00017.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setSteps(data));
  }, []); 

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 700,
          boxShadow: "1px 1px 10px 1px #474747",
          bgcolor: "#f2f2f2",
        }}
      >
        <div>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "#7479a1",
            }}
          >
            <Typography sx={{ color: "black" }}>
              User : {steps[activeStep]?.email}{" "}
            </Typography>
          </Paper>
          <p style={{ textAlign: "left", marginLeft: 50, color: "black" }}>
            Name : <strong>{steps[activeStep]?.name}</strong>
          </p>
          <Box sx={{ pb: 4, pt: 1, px: 3 }}>
            <p>{steps[activeStep]?.review}</p>

            <Rating
              style={{ color: "gold", fontSize: "26px" }}
              emptySymbol="fa-regular fa-star"
              fullSymbol="fa-solid fa-star"
              initialRating={steps[activeStep]?.rating}
              readonly
            />
          </Box>

          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ bgcolor: "aquamarine" }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </Box>
    </div>
  );
};

export default Review;