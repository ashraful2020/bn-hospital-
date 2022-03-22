import { Container, Grid } from "@mui/material";
import React from "react";
import './Feature.css'
const Feature = (props) => {
  const { title, description, Icon } = props.data;

   
  const featureDescription = {
    textAlign: "left",
    padding: "0px 10px",
  };

  return (
    <Grid item sx={12} md={6} sm={12}>
      <Container>
        <Grid container spacing={2} style={{padding:'0px',margin:0}}>
          <Grid item md={2} xs={4} style={{padding:"0px"}}>
            <Icon  className="feature-icon"></Icon>
          </Grid>
          <Grid item md={10} xs={8} sx={{ m: 0, p: 0 }} style={featureDescription}>
            <h2 className="feature-title">{title}</h2>
            <p className="feature-description">{description}</p>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Feature;
