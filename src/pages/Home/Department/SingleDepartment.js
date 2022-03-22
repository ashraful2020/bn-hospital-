import React from "react";
import { Button, CardContent, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const SingleDepartment = (props) => {
  const { title, img, description, cost } = props.data;
  const doctorImg = {
    width: " 300px",
    height: "170px", 
    objectFit: "cover",
  };
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card className="doctor-card">
        <CardMedia image={img} alt="doctor's images" />
        <img src={img} style={doctorImg} alt="" srcSet="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <b><big>Cost : ${cost}</big></b>
          <Typography variant="body2" color="text.secondary">
            <b>Description : </b> {description.slice(0,173)}
          </Typography>
          <Link to="/appointment">
            <Button variant="contained" sx={{ mt: 2 }}> Book an Appointment </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  ); 
};

export default SingleDepartment;
