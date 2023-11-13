import React from "react";
import { Box, Typography, Divider } from "@mui/material";
export default function LastBoxInLeftSide() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        width: "90%",
        margin: "25px auto 10px auto",
        borderRadius: "15px",
      }}>
      <Typography
        sx={{
          fontSize: "21px",
          fontWeight: "500",
          marginBottom: "17px",
        }}>
        {" "}
        پرسش های اخیر{" "}
      </Typography>
      <Divider />
      <Typography sx={{ textAlign: "center", marginTop: "25px" }}>
        تا به الان پرسشی ثبت نکرده اید
      </Typography>
    </Box>
  );
}
