import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Testimonial.css";
const TakeReview = () => {
  const { user } = useAuth();
  const [reviewInfo, setReviewInfo] = React.useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[field] = value;
    setReviewInfo(newReviewInfo);
  };
  const handleOnSubmit = (e) => {
    const review = {
      ...reviewInfo,
      status: "pending",
    };
    console.log(review);
    e.preventDefault();
  };
  return (
    <div className="review-container">
      <form onSubmit={handleOnSubmit}>
        <h2 className="review-header">Tell Something About us</h2>

        <TextField
          onChange={handleOnChange}
          className="review-name"
          required
          label="Name"
          name="name" 
          placeholder="Enter your name..."
        />
        <TextField
          onChange={handleOnChange}
          className="review-name"
          required
          label="message"
          name="message" 
          placeholder="Please say some thing about us....."
        />

        <Button
          variant="contained"
          type="submit"
          style={{ padding: "15px 60px",marginTop:"20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TakeReview;
