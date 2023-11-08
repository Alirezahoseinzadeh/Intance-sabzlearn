import { Box, Typography, Divider, Button, Stack } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  ModalUserInfoStyle,
  ButtonStyleForPishkhan,
  ButtonStyleForExit,
} from "./Topbar.styles";
import { Link } from "react-router-dom";

export default function ModalUser(props: any) {
  return (
    <>
      <Box sx={ModalUserInfoStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            columnGap: "20px",
            marginBottom: "10px",
          }}>
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
              }}>
              علیرضا حسین زاده
            </Typography>
            <Typography
              sx={{
                color: "blue",
                cursor: "pointer",
                fontSize: "19px",
              }}>
              موجودی : 0 تومان
            </Typography>
          </Box>
          <PersonOutlineIcon sx={{ fontSize: "45px" }} />
        </Box>
        <Divider />
        <Stack sx={{ marginTop: "8px", marginBottom: "8px" }} spacing={1}>
          <Button
            sx={ButtonStyleForPishkhan}
            endIcon={<HomeOutlinedIcon style={{ fontSize: "32px" }} />}>
            <Link
              to="/userinfo"
              style={{
                textDecoration: "none",
                color: "black",
              }}>
              پیشخوان
            </Link>
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              columnGap: "10px",
              color: "black",
              fontSize: "18px",
              "&:hover": {
                backgroundColor: "#f9f9f9",
              },
            }}
            endIcon={<WalletOutlinedIcon style={{ fontSize: "30px" }} />}>
            دوره های من
          </Button>
        </Stack>
        <Divider />
        <Button
          onClick={props.clickhandle}
          sx={ButtonStyleForExit}
          endIcon={<LogoutOutlinedIcon style={{ fontSize: "30px" }} />}>
          خروج
        </Button>
      </Box>
    </>
  );
}
