import React, { useState } from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
  styled,
} from "@mui/material";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { Login } from "../api/ApiService";
import ConfirmCode from "./ConfirmCode/ConfirmCode";
export default function Log_In() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [codeValid, setCodeValid] = useState<string>();

  const inputHandler = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const main_box = {
    backgroundColor: "#edefe9",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  };

  const f_row_box = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
  };

  const btnstyle = {
    width: "90%",
    color: "white",
    backgroundColor: "#2f8c13",
    borderRadius: "15px",
    fontSize: "23px",
    fontWeight: "900",
    letterSpacing: 3,
    opacity: "0.9",
    "&:hover": {
      color: "white",
      backgroundColor: "#2f8c13",
      opacity: "1",
    },
  };

  const lastTypo = {
    cursor: "pointer",
    "&:hover": {
      color: "#006660",
      fontSize: "19px",
    },
  };

  const login = async () => {
    if (phoneNumber) {
      try {
        const response = await Login(phoneNumber);
        localStorage.setItem("phonenumber", phoneNumber);
        // console.log(response);
        navigate("/confirmcode");
      } catch (error) {
        console.log("error");
      }
    }
  };
  return (
    <Box component="div" sx={main_box}>
      <Container maxWidth="xs" sx={{ height: "400px", marginTop: "30px" }}>
        <Stack spacing={4}>
          <Box sx={f_row_box}>
            <Box>
              <Typography sx={{ fontSize: "37px", fontWeight: "800" }}>
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
          <Stack
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "15px",
            }}>
            <Typography sx={{ fontSize: "34px", fontWeight: "800" }}>
              ورود
            </Typography>
            <Typography
              sx={{ fontSize: "22px", fontWeight: "400", color: "#55595f" }}>
              حساب کاربری ندارید؟
              <span>
                {" "}
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "green",
                    cursor: "pointer",
                  }}>
                  ثبت نام{" "}
                </Link>
              </span>
            </Typography>
            <FormControl
              sx={{
                m: 1,
                width: "36ch",
                backgroundColor: "#e5e9df",
                borderRadius: "19px",
              }}
              variant="outlined">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end">
                      <WifiCalling3Icon />
                    </IconButton>
                  </InputAdornment>
                }
                value={phoneNumber}
                onChange={inputHandler}
                id="outlined-adornment-password"
                label="شماره موبایل"
                sx={{
                  borderRadius: "19px",
                }}
              />
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  fontSize: "18px",
                }}>
                شماره موبایل
              </InputLabel>
            </FormControl>
            <Button sx={btnstyle} onClick={login}>
              تایید
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "90%",
                height: "60px",
              }}>
              <Typography
                component="span"
                sx={{
                  fontSize: "18px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                    fontSize: "19px",
                  },
                }}>
                <Link
                  to="/role"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "black",
                  }}>
                  حریم خصوصی
                </Link>
              </Typography>
              <Typography component="span" sx={lastTypo}>
                <Link
                  to="/LogInEmail"
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "black",
                  }}>
                  ورود با ایمیل
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
