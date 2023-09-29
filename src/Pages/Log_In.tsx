import React from "react";
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
export default function Log_In() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "#edefe9",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Container maxWidth="xs" sx={{ height: "400px" }}>
        <Stack spacing={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "10px",
            }}>
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
            spacing={2}
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
                id="outlined-adornment-password"
                label="شماره موبایل"
                sx={{
                  "& fieldset": {
                    borderRadius: "15px",
                  },
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
            <Button
              sx={{
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
              }}>
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
                  fontWeight: "700",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                    fontSize: "19px",
                  },
                }}>
                حریم خصوصی
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  cursor: "pointer",
                  "&:hover": {
                    color: "blue",
                    fontSize: "19px",
                  },
                }}>
                ورود با ایمیل
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
