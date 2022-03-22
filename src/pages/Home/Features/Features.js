import { Grid } from "@mui/material"; 
import React from "react";
 
import {
  FaAmbulance,
  FaHospitalSymbol,
  FaHospital,
  FaBriefcaseMedical,
  FaWheelchair,
} from "react-icons/fa";

import { GiStethoscope } from "react-icons/gi";
import Feature from "./Feature";
const Features = () => {
     
  const featuresData = [
    {
      id: 1,
      title: "Great Infrastructure",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi sit, dolorem eveniet similique eos veritatis",
      Icon: FaHospitalSymbol,
    },
    {
      id: 2,
      title: "24/7 Ambulance Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi sit, dolorem eveniet similique eos veritatis",
      Icon: FaAmbulance,
    },
    {
      id: 3,
      title: "Cutting Edge Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi sit, dolorem eveniet similique eos veritatis",
      Icon: FaHospital,
    },
    {
      id: 4,
      title: "Advanced Medical Facilities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi sit, dolorem eveniet similique eos veritatis",
      Icon: FaBriefcaseMedical,
    },
    {
      id: 5,
      title: "Excellent Ancillary Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi sit, dolorem eveniet similique eos veritatis",
      Icon: GiStethoscope,
    },
    {
      id: 6,
      title: "Social Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi sit, dolorem eveniet similique eos veritatis",
      Icon: FaWheelchair,
    },
  ];
  return (
    <>
      <h1 className="features-header">Feature's</h1>
        <Grid container spacing={2} className="project-container">
          {featuresData.map((data) => (
              <Feature key={data.id} data={data}></Feature>
 
          ))}
        </Grid> 
    </>
  );
};

export default Features;
