import React from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
export default function PercentCompleteCourse() {
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
      }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            gap: "20px",
            borderRadius: "11px",
          }}>
          {/* first */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#e5e7eb",
              flex: "1",
              padding: "25px 5px",
              borderRadius: "10px",
            }}>
            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                5.0
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>رضایت</Typography>
            </Box>
            <StarBorderPurple500RoundedIcon
              sx={{ fontSize: "40px", color: "#faae20" }}
            />
          </Box>
          {/* second */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#e5e7eb",
              flex: "1",
              padding: "25px 5px",
              borderRadius: "10px",
            }}>
            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                1122
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>دانشجو</Typography>
            </Box>
            <GroupAddOutlinedIcon sx={{ fontSize: "40px", color: "#00d084" }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: " 5px 20px",
        }}>
        <Typography sx={{ fontSize: "20px" }}>100%</Typography>
        <Typography sx={{ fontSize: "18px" }}>درصد تکمیل دوره</Typography>
      </Box>
      <Box sx={{ padding: " 5px 20px", margin: "10px" }}>
        <LinearProgress
          sx={{ height: "12px" }}
          color="success"
          value={30}
          variant="determinate"
        />
      </Box>
    </Stack>
  );
}
