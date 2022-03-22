import { Container, Grid } from "@mui/material";
import React from "react";
import "./contact.css";
import ContactInfo from "./ContactInfo";
import AppointmentContact from "../Apppointment/AppointmentContact"
const ContactUs = () => {
  const handleOnChange = () => {};
  return (
    <Container>
    <Grid container spacing={2}>
      <Grid md={8} sm={12}>
        <div>
          <h1
            style={{
              textAlign: "left",
              margin: "0px",
              marginLeft: "30px",
              marginTop: "15px",
            }}
          >
            Give us a Message
          </h1>
          <form action="/">
            <input
              className="contact-name"
              placeholder="Your Name"
              name="name"
              required
            ></input>
            <input
              className="contact-email"
              placeholder="Enter Your email"
              name="email"
              required
            ></input>
            <input
              className="contact-sub"
              placeholder="Enter Your comment subjects"
              name="subject"
              required
            ></input>
            <textarea
              onChange={handleOnChange}
              className="contact-message"
              name="message"
              placeholder="Please Describe your problem to slove it easy.. "
              required
            />
            <br />
            <input className="contact-submit-btn" type="submit" />
          </form>
        </div>
      </Grid>
      <Grid md={4} sm={12}>
        <ContactInfo />
        <AppointmentContact/>
      </Grid>
    </Grid>
    </Container>
  );
};

export default ContactUs;
