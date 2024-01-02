import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Button, Typography, IconButton } from "@mui/material";
import { Add, Remove, BookOnline } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Booking = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesCollection = collection(db, "services");
        const servicesSnapshot = await getDocs(servicesCollection);
        const servicesData = servicesSnapshot.docs.map((doc) => doc.data());
        setCardData(servicesData);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, [db]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="booking-container" style={{ backgroundColor: "#ffffff" }}>
        <br />
        <br />
        {/* Rendering dynamic card structures based on fetched data */}
        {cardData.map((item) => (
          <div
            key={item.title}
            style={{
              padding: "0px 20px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              margin: "0",
            }}
          >
            <Card sx={{ width: 345, my: 2, flexDirection: "row" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, flexShrink: 0 }}
                  image={item.image}
                  alt={`${item.title} image`}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    paddingLeft: 0,
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      textAlign: "left",
                      padding: "2px  10px 0px  10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "18px" }}
                      component="div"
                      variant="h6"
                    >
                      {item.title}
                      <br />
                      <b> {item.titleTamil}</b>
                    </Typography>
                    <br />
                  </CardContent>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        margin: "5px",
                        paddingLeft: "3px",
                        paddingTop: "4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        component="div"
                      >
                        RM : {item.price}
                      </Typography>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Card>
          </div>
        ))}
        <br />
        <br />
        <div
          className="padding-none"
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            height: "42px",
            zIndex: 1000,
            backgroundColor: "#E9B824",
          }}
        ></div>
      </div>
    </>
  );
};

export default Booking;
