import React from "react";
import {CardContent, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card"; 
import CardMedia from "@mui/material/CardMedia";
import { AiOutlineFacebook,AiOutlineGlobal,AiOutlineSkype,AiOutlineTwitter } from "react-icons/ai";
import "./doctor.css"

const Doctor = (props) => {
  const { name, img, contact } = props.data;
  const doctorImg={
    width:' 170px',
    height:'170px',
    borderRadius:"50%",
    objectFit:"cover",
  }
  return ( 
    <Grid item md={4} sm={6} xs={12}>
      <Card className="doctor-card">
        <CardMedia 
          image={img}
          alt="doctor's images"
        />
        <img src={img} style={doctorImg} alt="" srcSet="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact : {contact}
          </Typography>
        </CardContent>
        <div className="social-media">
           <AiOutlineFacebook className="facebook"/>
           <AiOutlineGlobal/>
           <AiOutlineSkype className="skype"/>
           <AiOutlineTwitter className="twitter"/> 
        </div>
      </Card>
    </Grid>
  );
};

export default Doctor;
