import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
export default function InfoUser() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const opendrawer = () => {
    setOpenDrawer(true);
  };

  const closedrawer = () => {
    setOpenDrawer(false);
  };
  const f_row_box = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "15px",
  };
  const styledrawer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "15px",
    marginTop: "20px",
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#fff",
          marginTop: "20px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}>
        <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              flex: "3",
              borderRadius: "10px",
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
              }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "Center",
                  columnGap: "20px",
                }}>
                <IconButton
                  aria-label="userinfo"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "green",
                      color: "whitesmoke",
                    },
                  }}>
                  <PersonOutlineOutlinedIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                </IconButton>
                <IconButton
                  aria-label="nightmode"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "whitesmoke",
                    },
                  }}>
                  <ModeNightOutlinedIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                </IconButton>
                <IconButton
                  aria-label="alert"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#dc5159",
                      color: "whitesmoke",
                    },
                  }}>
                  <NotificationsActiveOutlinedIcon
                    sx={{
                      fontSize: "35px",
                    }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  sx={{
                    fontSize: { md: "16px", lg: "22px" },
                    fontWeight: "500",
                    display: { xs: "none", md: "block" },
                  }}>
                  🙌علیرضا حسین زاده عزیز؛ خوش اومدی
                </Typography>
              </Box>
              <Box
                onClick={opendrawer}
                sx={{
                  display: {
                    xs: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                    md: " none",
                    cursor: "pointer",
                  },
                }}>
                <Typography component="span">پیشخوان</Typography>

                <MenuIcon
                  sx={{
                    fontsize: "36px",
                  }}
                />
              </Box>
              <Drawer
                PaperProps={{
                  sx: {
                    // width: 240,
                    backgroundColor: "white",
                  },
                }}
                variant="temporary"
                onClose={closedrawer}
                anchor="right"
                open={openDrawer}>
                <Box sx={styledrawer}>
                  <Box>
                    <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
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
                <Box
                  sx={{
                    width: "300px",
                    height: "250px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}>
                  <Stack
                    sx={{ marginTop: "8px", marginBottom: "8px" }}
                    spacing={2}>
                    <Typography>🙌علیرضا حسین زاده عزیز؛ خوش اومدی</Typography>
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        columnGap: "10px",
                        color: "white",
                        fontSize: "18px",
                        backgroundColor: "green",
                        borderRadius: "10px",
                        "&:hover": {
                          backgroundColor: "#006a25",
                        },
                      }}
                      endIcon={
                        <HomeOutlinedIcon style={{ fontSize: "30px" }} />
                      }>
                      پیشخوان
                    </Button>
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        columnGap: "10px",
                        color: "black",
                        fontSize: "18px",
                        "&:hover": {
                          backgroundColor: "#f9f9f9",
                        },
                      }}
                      endIcon={
                        <WalletOutlinedIcon style={{ fontSize: "30px" }} />
                      }>
                      دوره های من
                    </Button>
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        columnGap: "10px",
                        color: "black",
                        fontSize: "18px",
                        "&:hover": {
                          backgroundColor: "#f9f9f9",
                        },
                      }}
                      endIcon={
                        <MessageOutlinedIcon style={{ fontSize: "30px" }} />
                      }>
                      تیکت ها
                    </Button>
                  </Stack>
                  <Divider />
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      columnGap: "10px",
                      color: "black",
                      fontSize: "20px",
                      marginTop: "15px",
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                    endIcon={
                      <LogoutOutlinedIcon style={{ fontSize: "30px" }} />
                    }>
                    خروج
                  </Button>
                </Box>
              </Drawer>
            </Box>
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
                  // width: "200px",
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
                <AccountBalanceWalletIcon
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
                  backgroundColor: "#6389df",
                  // width: "200px",
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
                  // width: "200px",
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
                  // width: "200px",
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
                <AttachMoneyOutlinedIcon
                  sx={{ fontSize: "40px", color: "white" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                padding: "20px",
                width: "90%",
                margin: "25px auto 10px auto",
                borderRadius: "15px",
              }}>
              <Typography
                sx={{
                  fontSize: "21px",
                  fontWeight: "500",
                  marginBottom: "17px",
                }}>
                {" "}
                پرسش های اخیر{" "}
              </Typography>
              <Divider />
              <Typography sx={{ textAlign: "center", marginTop: "25px" }}>
                تا به الان پرسشی ثبت نکرده اید
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "inherit",
              flex: "1",
              display: { xs: "none", md: "block" },
            }}>
            <Stack>
              <Box sx={f_row_box}>
                <Box>
                  <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
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
              <Box
                sx={{
                  width: "300px",
                  height: "250px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}>
                <Stack
                  sx={{ marginTop: "8px", marginBottom: "8px" }}
                  spacing={2}>
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      columnGap: "10px",
                      color: "white",
                      fontSize: "18px",
                      backgroundColor: "green",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "#006a25",
                      },
                    }}
                    endIcon={<HomeOutlinedIcon style={{ fontSize: "30px" }} />}>
                    پیشخوان
                  </Button>
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      columnGap: "10px",
                      color: "black",
                      fontSize: "18px",
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                    endIcon={
                      <WalletOutlinedIcon style={{ fontSize: "30px" }} />
                    }>
                    دوره های من
                  </Button>
                  <Button
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      columnGap: "10px",
                      color: "black",
                      fontSize: "18px",
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                    endIcon={
                      <MessageOutlinedIcon style={{ fontSize: "30px" }} />
                    }>
                    تیکت ها
                  </Button>
                </Stack>
                <Divider />
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    columnGap: "10px",
                    color: "black",
                    fontSize: "20px",
                    marginTop: "15px",
                    "&:hover": {
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                  endIcon={<LogoutOutlinedIcon style={{ fontSize: "30px" }} />}>
                  خروج
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
