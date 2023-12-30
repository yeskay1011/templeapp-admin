import React from "react";
import Logo from "../../Assets/lord-murugan-clipart-png.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  return (
    <div className="backimg">
      <h2 className="custom-logo-head">ARLUMIGU THANDAYUTHAPANI KOVIL</h2>
      <h2 className="custom-logo-head">அருள்மிகு தண்டாயுதபாணி கோவில்</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <img
          src={Logo}
          alt="murugan"
          style={{ width: "180px", height: "230px" }}
        />
      </div>
      <div>
        <Box
          display="flex"
          flexDirection="column"
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%", mb: 1 },
            padding: "0 10px",
          }}
          noValidate
          autoComplete="off"
        >
          <Link to="/service-list" style={{ width: "100%", marginTop: "20px" }}>
            <Button style={{ width: "100%" }} variant="contained">
              Service List
            </Button>
          </Link>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                flex: "1",
                borderBottom: "1px solid #555",
                marginRight: "10px",
              }}
            ></div>
            <span style={{ color: "#555" }}>OR</span>
            <div
              style={{
                flex: "1",
                borderBottom: "1px solid #555",
                marginLeft: "10px",
              }}
            ></div>
          </div>
          <br />
          <Link to="/add-services" style={{ width: "100%" }}>
            <Button style={{ width: "100%" }} variant="contained">
              Add Services
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
