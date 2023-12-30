import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import Logo from "../../Assets/lord-murugan-clipart-png.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Auth/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      const loggedInUser = await loginUser({ email, password });
      console.log("Login successful:", loggedInUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
      navigate("/");
    }
  };

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
          <TextField
            name="email"
            label="Email - மின்னஞ்சல்"
            multiline
            maxRows={6}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            name="password"
            label="Password - கடவுச்சொல்"
            type="password"
            maxRows={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div style={{ width: "100%" }}>
            <Button
              style={{ width: "100%" }}
              variant="contained"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </div>
          {/* <Link to="/forgotpassword" style={{ color: "blue", marginTop: "3px" }}>
            Forget password?
          </Link> */}
          <br />
        </Box>
      </div>
    </div>
  );
};

export default Login;
