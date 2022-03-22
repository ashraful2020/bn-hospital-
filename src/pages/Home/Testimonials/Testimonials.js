import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./Testimonial.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const reviews = [
  {
    name: "Rakib",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere, aspernatur quaerat ut soluta cupiditate vitae dicta excepturi illum officia?",
    img: "",
  },
  {
    name: "Jamal",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere, aspernatur quaerat ut soluta cupiditate vitae dicta excepturi illum officia?",
    img: "",
  },
  {
    name: "Hasan",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere, aspernatur quaerat ut soluta cupiditate vitae dicta excepturi illum officia?",
    img: "https://i.ibb.co/vPjpv61/Orthopedics.jpg",
  },
];
const Testimonials = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <h1 className="testimonial-header">Testimonials</h1>
      <Box className="testimonial">
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            //   height: 50,
            //   pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{reviews[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {reviews.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box>
                  <p className="review">{step.review}</p>

                  <p className="review-info"> 
                      {step.img ?<img className="reviewer-icon" src={step.img} alt="" />: 
                      <p className="reviewer-icon">{step.name[0]}</p>}
                  </p>
                  <h2 className="reviewer-name">{step.name}</h2>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
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
      </Box>
    </div>
  );
};

export default Testimonials;
