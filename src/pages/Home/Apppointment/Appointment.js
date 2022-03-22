import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid, TextField } from "@mui/material";
import "./appointment.css";
import AppointmentSideBar from "./AppointmentSideBar";
import useAuth from "../../../hooks/useAuth";

const Appointment = () => {
  const { user} = useAuth();
  const [department, setDepartment] = React.useState("");
  const [reviewInfo, setReviewInfo] = React.useState({});

  const handleChange = (e) => {
    setDepartment(e.target.value);
  };
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[field] = value;
    setReviewInfo(newReviewInfo);
  }; 

  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const review = {
      ...reviewInfo,
      department:department,
      status:"pending",
        user:{
          name:user.displayName,
          email:user.email,
        }
    }; 
    // console.log(order);
    // send to the server
    fetch('https://salty-savannah-31637.herokuapp.com/appointment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Appointment Created SuccessFull')
        }
      });
  };

  return (
    <Grid container spacing={2}>
      <p className="appointment-header">Please Book and Appointment for Better Treatment</p>
      <Grid md={9} sm={9} xs={12}>
        <form onSubmit={handleOnSubmit}>
          <FormControl sx={{ m: 1, minWidth: 120 }} className="patient-info">
            <Select
              value={department}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              name="department" 
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
              <MenuItem value={"Orthopedics"}>Orthopedics</MenuItem>
              <MenuItem value={"Medicine"}>Medicine</MenuItem>
              <MenuItem value={"ENT"}>ENT</MenuItem>
              <MenuItem value={"Gastroenterology"}>Gastroenterology</MenuItem>
              <MenuItem value={"Gyane"}> Gyane </MenuItem>
            </Select>
          </FormControl>

          <TextField
            onChange={handleOnChange}
            className="patient-info"
            required
            label="Name"
            name="name"
            variant="outlined"
          />
          <TextField
            onChange={handleOnChange}
            className="patient-info"
            required
            label="E-mail"
            name="email"
            variant="outlined"
          />
          <TextField
            onChange={handleOnChange}
            className="patient-info"
            required
            label="Phone"
            name="phone"
            variant="outlined"
          />
          <h2 style={{ margin: "20px", textAlign: "left", marginLeft: "45px",marginBottom:"-30px" }}>
            Describe Your problem....
          </h2>
          <textarea
            onChange={handleOnChange}
            className="patient-message"
            name="message"
            placeholder="Please Describe your problem to slove it easy.. "
            cols="30"
            rows="5"
          />

          <Button
            variant="contained"
            type="submit"
            style={{ padding: "15px 60px" }}
          >
            Submit
          </Button>
        </form>
      </Grid>
      <Grid md={3} sm={12} xs={12} sx={{pl:3,pr:2}}>
        <AppointmentSideBar/>
      </Grid>
    </Grid>
  );
};

export default Appointment;
