import React, { useState } from "react";
import Logo from "../../Assets/lord-murugan-clipart-png.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { storeServiceData } from "../../Auth/auth";
import { ToastContainer } from "react-toastify";

const AddServices = () => {
  const navigate = useNavigate();

  const initialServiceData = {
    title: "",
    titleTamil: "",
    price: "",
    image: "",
  };

  const [serviceData, setServiceData] = useState(initialServiceData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({
      ...serviceData,
      [name]: value,
    });
  };

  const handleAddServiceClick = async () => {
    try {
      const serviceId = await storeServiceData(serviceData);
      console.log(
        "Service data submitted successfully. Service ID:",
        serviceId
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting service data:", error.message);
    }
  };

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
          "& .MuiTextField-root": { width: "100%", marginBottom: "20px" },
          padding: "0 10px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="title"
          label="Service Title"
          variant="outlined"
          value={serviceData.title}
          onChange={handleInputChange}
        />
        <TextField
          name="titleTamil"
          label="Service Title - Tamil"
          variant="outlined"
          value={serviceData.titleTamil}
          onChange={handleInputChange}
        />
        <TextField
          name="price"
          label="Service Price"
          variant="outlined"
          type="number"
          value={serviceData.price}
          onChange={handleInputChange}
        />
        <TextField
          name="image"
          label="Image URL"
          variant="outlined"
          value={serviceData.image}
          onChange={handleInputChange}
        />
        <Button
          style={{ width: "100%", marginTop: "16px" }}
          variant="contained"
          onClick={handleAddServiceClick}
        >
          Add Service
        </Button>
        <ToastContainer position="top-right" />
      </Box>
    </div>
  );
};

export default AddServices;
