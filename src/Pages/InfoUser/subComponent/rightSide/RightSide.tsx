import React from "react";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import {
  ContainerBox,
  ContainerBoxlogoandtypo,
  ButtonStyleForpishKhan,
  ButtonStyleForTicketAndmyCourse,
  ButtonStyleForExit,
} from "./RightSide.Style";
export default function RightSide() {
  return (
    <Box sx={ContainerBox}>
      <Stack>
        <Box sx={ContainerBoxlogoandtypo}>
          <Box>
            <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
              سبزلرن
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                letterSpacing: "2px",
                color: "#55595f",
              }}>
              sabzlearn.ir
            </Typography>
          </Box>
          <Box
            component="img"
            src="logo.Webp"
            sx={{ width: "104px", height: "70px" }}
          />
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "250px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}>
          <Stack sx={{ marginTop: "8px", marginBottom: "8px" }} spacing={2}>
            <Button
              sx={ButtonStyleForpishKhan}
              endIcon={<HomeOutlinedIcon style={{ fontSize: "30px" }} />}>
              پیشخوان
            </Button>
            <Button
              sx={ButtonStyleForTicketAndmyCourse}
              endIcon={<WalletOutlinedIcon style={{ fontSize: "30px" }} />}>
              دوره های من
            </Button>
            <Button
              sx={ButtonStyleForTicketAndmyCourse}
              endIcon={<MessageOutlinedIcon style={{ fontSize: "30px" }} />}>
              تیکت ها
            </Button>
          </Stack>
          <Divider />
          <Button
            sx={ButtonStyleForExit}
            endIcon={<LogoutOutlinedIcon style={{ fontSize: "30px" }} />}>
            خروج
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
