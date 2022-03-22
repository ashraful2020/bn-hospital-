import React from "react";
import Navigation from "../Shared/Navigation";
import Appointment from "./Apppointment/Appointment";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Department from "./Department/Department";
import Doctors from "./Doctor/Doctors";
import Features from "./Features/Features";
import TakeReview from "./Testimonials/TakeReview";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation/> 
      <Banner></Banner>
      <Department></Department>
      <Features></Features>
      <Doctors></Doctors>
      <ContactUs/>
      <Testimonials></Testimonials>
      <TakeReview/>
    </div>
  );
};

export default Home;
