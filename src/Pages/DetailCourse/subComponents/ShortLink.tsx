import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import MaterialLink from "@mui/material/Link";

export default function ShortLink() {
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "Center",
            flexDirection: "row",
            justifyContent: "end",
            gap: "10px",
          }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
            لینک کوتاه
          </Typography>
          <Box
            sx={{
              width: "40px",
              height: "8px",
              backgroundColor: "blue",
              borderRadius: "4px",
            }}></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "#dee1e1",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 0",
              borderRadius: "10px",
            }}>
            <MaterialLink href="#" underline="none" sx={{ fontSize: "21px" }}>
              https://sabzlearn.ir/?p=12...
            </MaterialLink>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
