import React from "react";

const VisitRules = () => {
  return (
    <div> 
        <div style={{color:'gray',textAlign:'left'}}>
        <h2 style={{color:"black"}}> After Booking</h2>
            <p>
          Hi fill in the details and submit the form. We will contact you via
          phone or email and fix a time schedule.
        </p>

        <b>
          These are the thing you need to carry with you when you come in for
          the appointment wit the doctor.
        </b>
        
        <p> {'>'}  Previous Medical History</p>
        <p> {'>'}  Enlisted Previous Numbers</p>
        <p> {'>'}  Discussion with Parents</p>
        <p> {'>'}  Make sure you are feeling good</p>
        <p> {'>'}  Have someone eith you</p>
        </div>
      </div> 
  );
};

export default VisitRules;
