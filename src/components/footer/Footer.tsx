import React from "react";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
export default function Footer() {
  const f_box = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  const Mainbox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "auto auto",
    },
  }));
  return (
    <Box sx={{ backgroundImage: "linear-gradient(to left ,#00abc0, #0082a3)" }}>
      <Container maxWidth="lg" sx={{ backgroundColor: "inherit" }}>
        <Stack spacing={2}>
          <Mainbox>
            <Box
              sx={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                color: "white",
                rowGap: "10px",
                marginTop: "10px",
                height: "200px",
              }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  marginBottom: "10px",
                  color: "#90ff90",
                }}>
                شبکه های اجتماعی
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  @ُSabzlearn_
                </Typography>
                <InstagramIcon sx={{ color: "red", fontSize: "30px" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                  @ُSabzlearn_
                </Typography>
                <TelegramIcon sx={{ color: "blue", fontSize: "30px" }} />
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                color: "white",
                rowGap: "10px",
                marginTop: "10px",
                height: "200px",
              }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  color: "#90ff90",
                }}>
                لینک های مفید
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
                آموزش جاوااسکریپت
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
                آموزش پایتون
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
                HTML آموزش
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                color: "white",
                rowGap: "10px",
                marginTop: "10px",
                height: "200px",
              }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "800",
                  color: "#90ff90",
                }}>
                دسترسی سریع
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
                قوانین و مقررات
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
                ارسال تیکت
              </Typography>
              <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
                همه دوره ها
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: "1",
                width: "200px",
                textAlign: "center",
                color: "white",
                rowGap: "20px",
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                height: "200px",
              }}>
              <Typography
                sx={{ fontSize: "24px", fontWeight: "800", color: "#90ff90" }}>
                درباره ما
              </Typography>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "whitesmoke",
                }}>
                سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل
                نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
              </Typography>
            </Box>
          </Mainbox>
          <Box>
            {/* <Box></Box>
            <Box></Box> */}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
