import React from "react";
import Logo from "../../Assets/lord-murugan-clipart-png.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  return (
    <div className="backimg">
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
          style={{ width: "160px", height: "auto", marginTop: "16px" }}
        />
      </div>
      <Box
        display="flex"
        flexDirection="column"
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%" },
          padding: "0 10px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name - பெயர்"
          multiline
          maxRows={6}
          variant="outlined"
          required
        />
        <br />
        <TextField
          label="Email - மின்னஞ்சல்"
          multiline
          maxRows={6}
          variant="outlined"
          required
        />
        <br />
        <div display="flex">
          <TextField
            // id="countryCode"
            value={"+60"}
            multiline
            maxRows={6}
            variant="outlined"
            style={{ width: "17%" }}
            disabled
          />
          <TextField
            label="Phone Number - தொலைபேசி எண்"
            multiline
            maxRows={6}
            variant="outlined"
            required
            style={{ width: "83%" }}
          />
        </div>
        <br />
        <TextField
          label="Password - கடவுச்சொல்"
          //   multiline
          maxRows={6}
          variant="outlined"
          type="password"
          required
        />
        <br />
        <TextField
          label="Confirm Password - கடவுச்சொல்லை உறுதிப்படுத்தவும்"
          //   multiline
          maxRows={6}
          variant="outlined"
          type="password"
          required
        />
        <br />
        <Button style={{ width: "100%" }} variant="contained">
          Sign Up
        </Button>
        <ToastContainer />
      </Box>
    </div>
  );
};

export default Signup;
