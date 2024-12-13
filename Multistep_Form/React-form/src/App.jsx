import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PI from "./components/PI";
import Adress from "./components/Adress";
import Review from "./components/Review";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/PI"
          element={<PI formData={formData} updateFormData={updateFormData} />}
        />
        <Route
          path="/Adress"
          element={<Adress formData={formData} updateFormData={updateFormData} />}
        />
        <Route path="/Review" element={<Review formData={formData} />} />
        <Route path="*" element={<Navigate to="/PI" />} />
      </Routes>
    </Router>
  );
};

export default App;

