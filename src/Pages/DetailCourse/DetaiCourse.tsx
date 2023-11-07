import React from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Topbar from "../../components/Topbar/Topbar";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ShortLink from "./subComponents/ShortLink";
import InfoMaster from "./subComponents/InfoMaster";
import PercentCompleteCourse from "./subComponents/PercentCompleteCourse";
import TitleOfCourses from "./subComponents/TitleOfCourses/TitleOfCourses";
import InfoCourses from "./subComponents/InfoCourses";
import HeadInfoCourses from "./subComponents/HeadInfoCourses";

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
              <HeadInfoCourses />
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                paddingTop: "30px",
              }}>
              <Stack
                sx={{
                  flex: "1",
                  backgroundColor: "inherit",
                  marginBottom: "10px",
                  position: "sticky",
                  top: "10px",
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
