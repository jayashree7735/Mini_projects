import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Information = ({ formData, updateFormData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("All fields are required.");
      return;
    }
    setError("");
    navigate("/Adress");
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => updateFormData({ firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => updateFormData({ lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Information;
