import {
  Box,
  Container,
  Stack,
  Typography,
  Input,
  Button,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { OtpLogin } from "../../api/ApiService";
import {
  btnstyle,
  ContainerBox,
  StyleForLogo,
  styleFormainContentStack,
  StyleForIconToback,
  StleForcodetaeedText,
  StyleForConatinerInpute,
  StyleForEveryInpute,
} from "./ConfirmCode.Style";

export default function ConfirmCode() {
  const [openSnackBar, setOpenSnakBar] = useState<boolean>(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  useEffect(() => {
    setOpenSnakBar(true);
    if (localStorage.getItem("phonenumber")) {
      setPhoneNumber(localStorage.getItem("phonenumber"));
    } else {
      navigate("/login");
    }
  }, []);

  const handleInputs = (index: any, value: any) => {
    if (value.length === 1 && index < otpValues.length) {
      setOtpValues((prevOtpValues) => {
        const newOtpValues = [...prevOtpValues];
        newOtpValues[index] = value;
        // Move focus to the next input
        if (index < otpValues.length - 1) {
          const nextInput = document.getElementById(`otp-input-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
          }
        }
        return newOtpValues;
      });
    }
  };

  const handlekey = (index: any, keyword: any) => {
    if (keyword == "Backspace") {
      if (index < otpValues.length) {
        const newotpValue = [...otpValues];
        newotpValue[index] = "";
        setOtpValues(newotpValue);
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };
  // submit value to api

  const submitHandler = async () => {
    const isOtpComplet = otpValues.every((value) => value.length === 1);

    console.log(otpValues);
    if (isOtpComplet) {
      const otp = otpValues.join("");
      try {
        const response = await OtpLogin(phoneNumber, otp, "web");
        localStorage.setItem("accessToken", response.data.data.token);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        localStorage.removeItem("phonenumber");
        navigate("/");
      } catch (error: any) {
        alert(error.response.data.message);
      }
    } else {
      alert("لطفا کد تایید را به درستی وارد کنید");
    }
  };

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnakBar(false);
  };

  return (
    <Box component="div" sx={ContainerBox}>
      <Container maxWidth="xs" sx={{ height: "400px", marginTop: "30px" }}>
        <Stack spacing={4}>
          <Box sx={StyleForLogo}>
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
        </Stack>
        <Stack sx={styleFormainContentStack} spacing={4}>
          <ReplyOutlinedIcon sx={StyleForIconToback} />
          <Typography sx={StleForcodetaeedText}>کد تایید</Typography>
          <Box sx={StyleForConatinerInpute}>
            {otpValues.map((value, index) => (
              <Input
                value={value}
                key={index}
                id={`otp-input-${index}`}
                onChange={(e: any) => handleInputs(index, e.target.value)}
                defaultValue=""
                sx={StyleForEveryInpute}
                onKeyDown={(e: any) => handlekey(index, e.key)}
              />
            ))}
          </Box>
          <Typography
            style={{
              width: "100%",
              fontSize: "12px",
              marginRight: "55px",
              marginTop: "20px",
            }}>
            کد تایید برای شماره موبایل {phoneNumber} ارسال شد
          </Typography>
          <Button variant="contained" sx={btnstyle} onClick={submitHandler}>
            تایید
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              height: "60px",
            }}>
            <Typography sx={{ fontSize: "15px", cursor: "pointer" }}>
              ارسال دوباره
            </Typography>

            <Typography>
              <Link
                to="/role"
                style={{
                  fontSize: "15px",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                }}>
                حریم خصوصی
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="کد تایید به شماره موبایل شما ارسال شد"
        sx={{ backgroundColor: "green" }}
      />
    </Box>
  );
}
