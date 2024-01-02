import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddServices from "./Components/Services/AddServices";
import ServiceList from "./Components/Services/ServiceList";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-services" element={<AddServices />} />
          <Route path="/service-list" element={<ServiceList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
