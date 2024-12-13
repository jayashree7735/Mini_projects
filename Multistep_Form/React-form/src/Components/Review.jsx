import React from "react";
import { useNavigate } from "react-router-dom";

const Review = ({ formData }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Adress");
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    navigate("/PI");
  };

  return (
    <div>
      <h1> Review and Submit</h1>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>ZIP Code:</strong> {formData.zip}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Review;
