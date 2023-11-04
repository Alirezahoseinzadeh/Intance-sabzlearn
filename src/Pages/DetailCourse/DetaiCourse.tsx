import React, { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Topbar from "../../components/Topbar/Topbar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ReactPlayer from "react-player";
import ShortLink from "./componentsLittle/ShortLink";
import InfoMaster from "./componentsLittle/InfoMaster";
import PercentCompleteCourse from "./componentsLittle/PercentCompleteCourse";
import TitleOfCourses from "./componentsLittle/TitleOfCourses";
import InfoCourses from "./componentsLittle/InfoCourses";

export default function DetailCourse() {
  return (
    <Box>
      <Topbar />
      <Box sx={{ backgroundColor: "#ededec", width: "100%", display: "flex" }}>
        <Container sx={{ marginTop: "30px" }} maxWidth="lg">
          <Stack spacing={4}>
            <Box
              sx={{
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                columnGap: "50px",
              }}>
              <Typography
                component="span"
                sx={{
                  backgroundColor: "white",
                  position: "relative",
                  paddingBottom: "5px",
                  fontWeight: "500",
                }}>
                <div
                  style={{
                    position: "absolute",
                    width: "33px",
                    height: "33px",
                    borderBottom: "3px solid #E4E4E6",
                    borderLeft: "3px solid #E4E4E6",
                    rotate: "45deg",
                    left: "-19px",
                    top: "-2px",
                  }}
                />
                اموزش حرفه ایی بدون NodeJS پیش نیاز
              </Typography>
              <Typography
                component="span"
                sx={{
                  backgroundColor: "white",
                  position: "relative",
                  paddingBottom: "5px",
                  fontWeight: "500",
                }}>
                <div
                  style={{
                    position: "absolute",
                    width: "33px",
                    height: "33px",
                    borderBottom: "3px solid #E4E4E6",
                    borderLeft: "3px solid #E4E4E6",
                    rotate: "45deg",
                    left: "-19px",
                    top: "-2px",
                  }}
                />
                بک اند
              </Typography>
              <Typography
                component="span"
                sx={{
                  backgroundColor: "white",
                  position: "relative",
                  paddingBottom: "5px",
                  fontWeight: "500",
                }}>
                <div
                  style={{
                    position: "absolute",
                    width: "33px",
                    height: "33px",
                    borderBottom: "3px solid #E4E4E6",
                    borderLeft: "3px solid #E4E4E6",
                    rotate: "45deg",
                    left: "-19px",
                    top: "-2px",
                  }}
                />
                دوره ها
              </Typography>

              <IconButton sx={{ marginRight: "15px" }}>
                <CottageOutlinedIcon />
              </IconButton>
            </Box>
            <Stack spacing={6} sx={{ display: "flex" }} direction="row">
              <Box>
                <ReactPlayer
                  url="asist/redux.mp4"
                  controls={true}
                  width="500px"
                  height="200px"
                  style={{
                    backgroundColor: "black",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                  آموزش حرفه ای NodeJS بدون پیش نیاز
                </Typography>
                <Typography
                  sx={{
                    textAlign: "justify",
                    marginTop: "10px",
                    opacity: "0.7",
                  }}>
                  الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر
                  نباشه و یکی از دلایل استفاده از این تکنولوژی فارغ از یه خیلی
                  از مزایاش برای برنامه نویسا(کسب و کار ها به کنار) همین بازار
                  کارشه و ما توی این دوره از نقطه منفی صفر حتی اگه جاوااسکریپت
                  بلد نباشید هم بهتون یادش میدیم و بعد میریم{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "40px",
                  }}>
                  <Typography> 4,350,000 تومان</Typography>
                  <Button
                    variant="contained"
                    endIcon={<VerifiedUserIcon />}
                    sx={{
                      fontSize: "19px",
                      backgroundColor: "#00d084",
                      "&:hover": {
                        backgroundColor: "#00d084",
                      },
                    }}>
                    شرکت دوره
                  </Button>
                </Box>
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "Center",
                gap: "20px",
                paddingTop: "30px",
              }}>
              <Stack
                sx={{
                  flex: "1",
                  backgroundColor: "inherit",
                  marginBottom: "10px",
                }}
                spacing={4}>
                <PercentCompleteCourse />
                <InfoMaster />
                <ShortLink />
              </Stack>
              <Stack sx={{ flex: "2" }}>
                <InfoCourses />
                <TitleOfCourses />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
