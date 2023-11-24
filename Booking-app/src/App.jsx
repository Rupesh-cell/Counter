import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginn from "./Pages/Loginn";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Loginn />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
