import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import {
  BoxContainer,
  BoxIconStyle,
  StyleForPersonIcon,
  StyleForNightModeIcon,
  StyleForNotifIcon,
} from "./FirstBoxInLeftSide.Style";
import DrawerComponent from "./DrawerComponent";
export default function FirstBoxInLeftSide() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const opendrawer = () => {
    setOpenDrawer(true);
  };

  const closedrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Box sx={BoxContainer}>
      <Box sx={BoxIconStyle}>
        <IconButton aria-label="userinfo" sx={StyleForPersonIcon}>
          <PersonOutlineOutlinedIcon
            sx={{
              fontSize: "35px",
            }}
          />
        </IconButton>
        <IconButton aria-label="nightmode" sx={StyleForNightModeIcon}>
          <ModeNightOutlinedIcon
            sx={{
              fontSize: "35px",
            }}
          />
        </IconButton>
        <IconButton aria-label="alert" sx={StyleForNotifIcon}>
          <NotificationsActiveOutlinedIcon
            sx={{
              fontSize: "35px",
            }}
          />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography
          sx={{
            fontSize: { md: "16px", lg: "22px" },
            fontWeight: "500",
            display: { xs: "none", md: "block" },
          }}>
          🙌علیرضا حسین زاده عزیز؛ خوش اومدی
        </Typography>
      </Box>
      <Box
        onClick={opendrawer}
        sx={{
          display: {
            xs: "flex",
            alignItems: "center",
            columnGap: "10px",
            md: " none",
            cursor: "pointer",
          },
        }}>
        <Typography component="span">پیشخوان</Typography>

        <MenuIcon
          sx={{
            fontsize: "36px",
          }}
        />
      </Box>
      <>
        <DrawerComponent toClose={closedrawer} state={openDrawer} />
      </>
    </Box>
  );
}
