import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./Components/List";
import Detail from "./Components/Detail";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/posts/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;