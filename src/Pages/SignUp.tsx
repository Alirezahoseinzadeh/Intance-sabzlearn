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
  FormHelperText,
  Checkbox,
  Snackbar,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import CallEndIcon from "@mui/icons-material/CallEnd";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import { Register } from "../api/ApiService";
import { useNavigate } from "react-router-dom";
// import { PhoenRegex } from "../components/RegexHelper";

export default function LogInEmail() {
  const [user, setUser] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const userhandler = (e: any) => {
    setUser(e.target.value);
  };

  const validatePhone = (phone: any): boolean => {
    const phoneRegex = /^09[09|01|3|4][0-9]{8}$/;
    return phoneRegex.test(phone);
  };

  const phonehandler = (e: any) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    setPhoneError(!validatePhone(newPhone));
  };

  const validateEmail = (emailes: any): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailes);
  };

  const emailhanler = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!validateEmail(newEmail));
  };

  const validatePassword = (pass: any): boolean => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    return passwordRegex.test(pass);
  };
  const passwordhandler = (e: any) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setPassError(!validatePassword(newPass));
  };

  const submitHandler = async () => {
    if (user && phone && email && password) {
      try {
        const response = await Register(user, email, phone, password);
        setOpen(true);
        setUser("");
        setEmail("");
        setPhone("");
        setPassword("");
        setTimeout(() => {
          if (response) {
            navigate("/login");
          }
        }, 3000);
      } catch (error: any) {
        console.log(error);
        if (error.response.status == 400) {
          alert(error.response.data.message);
        }
      }
    } else {
      alert("لطفا تمامی موارد مورد نیاز را پر کنید");
    }
  };

  // snack

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const main_box = {
    backgroundColor: "#edefe9",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
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
    fontSize: "20px",
    fontWeight: "800",
    letterSpacing: 3,
    opacity: "0.8",
    "&:hover": {
      color: "white",
      backgroundColor: "#2f8c13",
      opacity: "1",
    },
  };

  return (
    <Box component="div" sx={main_box}>
      <Container
        maxWidth="xs"
        sx={{ height: "750px", marginTop: "10px", marginBottom: "50px" }}>
        <Stack spacing={4}>
          <Box sx={f_row_box}>
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
          </Box>
          <Stack
            spacing={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "15px",
              height: passError && emailError ? "660px" : "600px",
            }}>
            <Typography sx={{ fontSize: "31px", fontWeight: "800" }}>
              عضویت
            </Typography>
            <Typography
              sx={{ fontSize: "19px", fontWeight: "400", color: "#55595f" }}>
              قبلا ثبت نام کرده اید؟
              <span style={{ color: "green", cursor: "pointer" }}>
                {" "}
                وارد شوید{" "}
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
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                }
                required
                type="text"
                value={user}
                onChange={userhandler}
                id="outlined-adornment-password"
                label="نام کاربری"
                sx={{
                  borderRadius: "15px",
                }}
              />
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{
                  fontSize: "18px",
                }}>
                نام کاربری
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
                      <CallEndIcon />
                    </IconButton>
                  </InputAdornment>
                }
                value={phone}
                onChange={phonehandler}
                id="outlined-adornment-PhoneNumber"
                label="شماره موبایل"
                sx={{
                  borderRadius: "15px",
                }}
                error={phoneError}
              />
              <InputLabel
                htmlFor="outlined-adornment-PhoneNumber"
                sx={{
                  fontSize: "18px",
                }}>
                شماره موبایل
              </InputLabel>
            </FormControl>
            {phoneError ? (
              <FormHelperText
                id="outlined-adornment-PhoneNumber"
                style={{
                  color: "red",
                  marginTop: "9px",
                  marginLeft: "0px",
                  width: "70%",
                }}>
                لطفا شماره موبایل خود را صحیح وارد نمایید
              </FormHelperText>
            ) : (
              ""
            )}
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
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                }
                error={emailError}
                required
                type="email"
                value={email}
                onChange={emailhanler}
                id="outlined-adornment-email"
                label="آدرس ایمیل"
                sx={{
                  borderRadius: "15px",
                }}
              />
              <InputLabel
                htmlFor="outlined-adornment-email"
                sx={{
                  fontSize: "18px",
                }}>
                آدرس ایمیل
              </InputLabel>
            </FormControl>
            {emailError ? (
              <FormHelperText
                id="outlined-adornment-email"
                style={{
                  color: "red",
                  marginTop: "9px",
                  marginLeft: "0px",
                  width: "70%",
                }}>
                آدرس ایمیل نامعتبر است
              </FormHelperText>
            ) : (
              ""
            )}

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
                      <HttpsIcon />
                    </IconButton>
                  </InputAdornment>
                }
                error={passError}
                type="password"
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
            {passError ? (
              <FormHelperText
                id="outlined-adornment-email"
                style={{
                  color: "red",
                  marginTop: "9px",
                  marginLeft: "0px",
                  width: "70%",
                }}>
                پسورد شما ضعیف می باشد
              </FormHelperText>
            ) : (
              ""
            )}
            <Button sx={btnstyle} onClick={submitHandler}>
              تایید
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="ثبت نام با موفقیت انجام شد"
      />
    </Box>
  );
}
