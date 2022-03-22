import React from 'react';
import {IoRocketOutline  } from "react-icons/io5";
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai";
const ContactInfo = () => {
    const icon={
        fontSize:"30px",
        color:"blue"
    }
    return (
        <div> 
            <div className="location"> 
                <h1 style={{color:"black"}}>contact Info</h1>
                <p > <IoRocketOutline style={icon}/>Adress House- -1 and, 6 Road No 4, Dhaka 1205</p> 
                <p> <AiOutlinePhone style={icon}/>Phone : 017284723842</p> 
                <p> <AiOutlineMail style={icon}/>Email : info@bn.com</p> 
            </div>
        </div>
    );
};

export default ContactInfo;