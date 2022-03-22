import { Grid,Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
import "./doctor.css"

const Doctors = () => {
const [doctor,setDoctor]=useState([])
  useEffect(() => {
    fetch("./doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  return <Container> 
      <h1 className="features-header"> Our specialist doctor</h1>
        <Grid container spacing={2}>
          {doctor.map((data) => (
              <Doctor key={data.id} data={data}></Doctor>
          ))}
        </Grid>  
  </Container>;
};

export default Doctors;