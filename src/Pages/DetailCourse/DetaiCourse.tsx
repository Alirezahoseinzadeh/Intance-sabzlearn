import React from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import Topbar from "../../components/Topbar/Topbar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ReactPlayer from "react-player";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";
// import video from "../../../public/asist";
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
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px",
                      gap: "20px",
                      borderRadius: "11px",
                    }}>
                    {/* first */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "#e5e7eb",
                        flex: "1",
                        padding: "25px 5px",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontWeight: "600", fontSize: "20px" }}>
                          5.0
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>رضایت</Typography>
                      </Box>
                      <StarBorderPurple500RoundedIcon
                        sx={{ fontSize: "40px", color: "#faae20" }}
                      />
                    </Box>
                    {/* second */}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        backgroundColor: "#e5e7eb",
                        flex: "1",
                        padding: "25px 5px",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontWeight: "600", fontSize: "18px" }}>
                          1122
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                          دانشجو
                        </Typography>
                      </Box>
                      <GroupAddOutlinedIcon
                        sx={{ fontSize: "40px", color: "#00d084" }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: " 5px 20px",
                  }}>
                  <Typography sx={{ fontSize: "20px" }}>100%</Typography>
                  <Typography sx={{ fontSize: "18px" }}>
                    درصد تکمیل دوره
                  </Typography>
                </Box>
                <Box></Box>
              </Stack>
              <Stack sx={{ flex: "2" }}>
                <Grid container spacing={3}>
                  {/* first */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1px",
                        padding: "10px",
                        backgroundColor: "white",
                        justifyContent: "end",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}>
                          آخرین بروز رسانی
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          1402/06/21
                        </Typography>
                      </Box>
                      <IconButton>
                        <CalendarMonthRoundedIcon
                          sx={{
                            color: "green",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>

                  {/* second */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1px",
                        padding: "10px",
                        backgroundColor: "white",
                        justifyContent: "end",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}>
                          مدت زمان دوره
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          12 ساعت
                        </Typography>
                      </Box>
                      <IconButton>
                        <AccessAlarmOutlinedIcon
                          sx={{
                            color: "green",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>

                  {/* three */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1px",
                        padding: "10px",
                        backgroundColor: "white",
                        justifyContent: "end",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}>
                          وضعیت دوره
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          تکمیل شده
                        </Typography>
                      </Box>
                      <IconButton>
                        <GppMaybeOutlinedIcon
                          sx={{
                            color: "green",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>

                  {/* foure */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1px",
                        padding: "10px",
                        backgroundColor: "white",
                        justifyContent: "end",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}>
                          نوع مشاهده
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          دانلودی/آنلاین
                        </Typography>
                      </Box>
                      <IconButton>
                        <SlowMotionVideoRoundedIcon
                          sx={{
                            color: "green",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>
                  {/* five */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1px",
                        padding: "10px",
                        backgroundColor: "white",
                        justifyContent: "end",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}>
                          پیش نیاز
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          JS{" "}
                        </Typography>
                      </Box>
                      <IconButton>
                        <LocalMallRoundedIcon
                          sx={{
                            color: "green",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>

                  {/* six */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1px",
                        padding: "10px",
                        backgroundColor: "white",
                        justifyContent: "end",
                        borderRadius: "10px",
                      }}>
                      <Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}>
                          روش پشتیبانی
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
                          آنلاین
                        </Typography>
                      </Box>
                      <IconButton>
                        <GroupAddOutlinedIcon
                          sx={{
                            color: "green",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
