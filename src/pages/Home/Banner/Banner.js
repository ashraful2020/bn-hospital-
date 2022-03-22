import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./banner.css";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const data = [
  {
    title: "CT-Scan",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet, quod, quis quisquam quae nihil quam, odio animi corrupti in consequatur accusantium quibusdam voluptatibus quas sequi doloribus hic molestias eius?",
    img: "https://i.ibb.co/VH0VZrs/ct-scan.jpg",
  },
  {
    title: "Daiylisis",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet, quod, quis quisquam quae nihil quam, odio animi corrupti in consequatur accusantium quibusdam voluptatibus quas sequi doloribus hic molestias eius?",
    img: "https://i.ibb.co/4tPm4yF/daiylisis.jpg",
  },
  {
    title: "ICU",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet, quod, quis quisquam quae nihil quam, odio animi corrupti in consequatur accusantium quibusdam voluptatibus quas sequi doloribus hic molestias eius?",
    img: "https://i.ibb.co/q1cPMyy/icu.jpg",
  },
  {
    title: "NICU",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet, quod, quis quisquam quae nihil quam, odio animi corrupti in consequatur accusantium quibusdam voluptatibus quas sequi doloribus hic molestias eius?",
    img: "https://i.ibb.co/p1cr9HM/nicu.jpg",
  },
];

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Box className="banner">
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "background.default",
          }}
        >
          <Typography>{data[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {data.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div
                  style={{
                    backgroundImage: "url(" + step.img + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                  }}
                >
                  <div>
                    <h2 className="banner-title"> Unit of {step.title}</h2>
                    <p className="banner-description">{step.description}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </div>
  );
};

export default Banner;
