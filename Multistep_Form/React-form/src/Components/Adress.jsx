import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = ({ formData, updateFormData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.address || !formData.city || !formData.state || !formData.zip) {
      setError("All fields are required.");
      return;
    }
    setError("");
    navigate("/Review");
  };

  const handleBack = () => {
    navigate("/PI");
  };

  return (
    <div>
      <h1>Address Information</h1>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => updateFormData({ address: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => updateFormData({ city: e.target.value })}
      />
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => updateFormData({ state: e.target.value })}
      />
      <input
        type="text"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={(e) => updateFormData({ zip: e.target.value })}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Address;
