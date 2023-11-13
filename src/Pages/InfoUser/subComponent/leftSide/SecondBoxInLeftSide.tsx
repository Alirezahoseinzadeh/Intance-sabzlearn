import { Box, Typography } from "@mui/material";
import React from "react";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
export default function SecondBoxInLeftSide() {
  return (
    <Box
      sx={{
        margin: "25px auto auto auto",
        display: "flex",
        flexWrap: "wrap",
        gridGap: "10px",
        width: "80%",
        textAlign: "right",
        padding: "0 10px",
      }}>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          flexBasis: "200px",
          alignItems: "center",
          justifyContent: "end",
          columnGap: "20px",
          marginBottom: "10px",
          padding: "15px",
          borderRadius: "15px",
          backgroundColor: "orange",
        }}>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
            }}>
            کش بک
          </Typography>
          <Typography
            sx={{
              color: "blue",
              cursor: "pointer",
              fontSize: "19px",
            }}>
            0 تومان
          </Typography>
        </Box>
        <AccountBalanceWalletIcon sx={{ fontSize: "40px", color: "white" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          flexBasis: "200px",
          alignItems: "center",
          justifyContent: "end",
          columnGap: "20px",
          marginBottom: "10px",
          padding: "15px",
          borderRadius: "15px",
          backgroundColor: "#6389df",
        }}>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              color: "whitesmoke",
            }}>
            دوره های من
          </Typography>
          <Typography
            sx={{
              color: "white",
              cursor: "pointer",
              fontSize: "19px",
            }}>
            14 دوره
          </Typography>
        </Box>
        <FlightOutlinedIcon sx={{ fontSize: "40px", color: "white" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          flexBasis: "200px",
          alignItems: "center",
          justifyContent: "end",
          columnGap: "20px",
          marginBottom: "10px",
          padding: "15px",
          borderRadius: "15px",
          backgroundColor: "#c41768",
        }}>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              color: "whitesmoke",
            }}>
            مجموع تیکت ها
          </Typography>
          <Typography
            sx={{
              color: "white",
              cursor: "pointer",
              fontSize: "19px",
            }}>
            0 تیکت
          </Typography>
        </Box>
        <ConfirmationNumberOutlinedIcon
          sx={{ fontSize: "40px", color: "white" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          flexBasis: "200px",
          alignItems: "center",
          justifyContent: "end",
          columnGap: "20px",
          marginBottom: "10px",
          padding: "15px",
          borderRadius: "15px",
          backgroundColor: "#197551",
        }}>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              color: "whitesmoke",
            }}>
            موجودی حساب
          </Typography>
          <Typography
            sx={{
              color: "white",
              cursor: "pointer",
              fontSize: "19px",
            }}>
            0 تیکت
          </Typography>
        </Box>
        <AttachMoneyOutlinedIcon sx={{ fontSize: "40px", color: "white" }} />
      </Box>
    </Box>
  );
}
