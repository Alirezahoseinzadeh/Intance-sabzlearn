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
  Checkbox,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";

import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { LoginEmail } from "../api/ApiService";
import { Link, useNavigate } from "react-router-dom";
export default function LogInEmail() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  const navigate = useNavigate();

  const submit = async () => {
    if (email && password) {
      setBtnDisable(true);
      try {
        const response = await LoginEmail(email, password, "web");
        localStorage.setItem("accessToken", response.data.data.token);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        navigate("/");
      } catch (error: any) {
        if (error.response.status == 400) {
          alert(error.response.data.message);
          setBtnDisable(false);
        }
      }
    } else {
      alert("لطفا اطلاعات خود را وارد نمایید");
      setBtnDisable(false);
    }
  };

  const emailhanler = (e: any) => {
    setEmail(e.target.value);
  };
  console.log(email);
  const passwordhandler = (e: any) => {
    setPassword(e.target.value);
  };

  const main_box = {
    backgroundColor: "#edefe9",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
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
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      color: "#006660",
      fontSize: "16px",
    },
  };
  return (
    <Box component="div" sx={main_box}>
      <Container maxWidth="xs" sx={{ height: "400px", marginTop: "10px" }}>
        <Stack spacing={4}>
          <Box>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: "10px",
                textDecoration: "none",
                color: "black",
              }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "37px",
                    fontWeight: "800",
                  }}>
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
            </Link>
          </Box>
          <Stack
            spacing={4}
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
              <span style={{ color: "green", cursor: "pointer" }}>
                {" "}
                ثبت نام{" "}
              </span>
            </Typography>
            <FormControl
              sx={{
                m: 1,
                width: "36ch",
                backgroundColor: "#e5e9df",
                borderRadius: "15px",
                borderColor: "1px solid red",
              }}
              variant="outlined">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end">
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                }
                required
                type="email"
                value={email}
                onChange={emailhanler}
                id="outlined-adornment-password"
                label="آدرس ایمیل"
                sx={{
                  borderRadius: "15px",
                }}
              />
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  fontSize: "18px",
                }}>
                آدرس ایمیل
              </InputLabel>
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                width: "36ch",
                backgroundColor: "#e5e9df",
                borderRadius: "15px",
              }}
              variant="outlined">
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end">
                      {showPass ? (
                        <VisibilityOffRoundedIcon
                          onClick={() => setShowPass(false)}
                        />
                      ) : (
                        <RemoveRedEyeRoundedIcon
                          onClick={() => setShowPass(true)}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                // error

                type={showPass ? "text" : "password"}
                value={password}
                onChange={passwordhandler}
                id="outlined-adornment-password"
                label="رمز عبور"
                sx={{
                  borderRadius: "15px",
                }}
              />
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  fontSize: "18px",
                }}>
                رمز عبور
              </InputLabel>
            </FormControl>
            <Button sx={btnstyle} onClick={submit} disabled={btnDisable}>
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
                  fontSize: "15px",
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                    fontSize: "16px",
                  },
                }}>
                فراموشی رمز عبور
              </Typography>
              <Typography component="span" sx={lastTypo}>
                مرا فراموش نکن
                <Checkbox />
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
