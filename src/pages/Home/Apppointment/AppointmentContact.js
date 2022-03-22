import React from 'react';
import {BsPen  } from "react-icons/bs";
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai";
import "./appointment.css"

const AppointmentContact = () => {
    const info={
        backgroundColor:"gray",
        padding:"0px 0px 10.5px 0px",
        color:"white",
        display:"block",
        marginTop:"10px",
        width:"100%",
    }
    return (
        <div>
            <div className="location">
            <h2 style={{color:"black"}}>Book An Appointment</h2>
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, cumque impedit perferendis earum optio in labore incidunt </b>
            <span>
                <span style={info}> <AiOutlinePhone className="Appointment-contact-icon"/> Phone : 017284723842</span> 
                <span style={info}> <AiOutlineMail className="Appointment-contact-icon"/> Email : info@bn.com</span> 
                <span style={info}> <BsPen className="Appointment-contact-icon"/><span >Online Form : Fill out this form</span></span> 
            </span>
            </div>
        </div>
    );
};

export default AppointmentContact;