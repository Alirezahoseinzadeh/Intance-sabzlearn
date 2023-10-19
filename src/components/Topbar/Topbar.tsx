import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  styled,
  Menu,
  MenuItem,
  Drawer,
  TextField,
  Modal,
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListIcon from "@mui/icons-material/List";
import Person3Icon from "@mui/icons-material/Person3";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { GetCourseCategories, UserInfo } from "../../api/ApiService";
import { TypoDraw, TypoMenu } from "./Topbar.styles";
import CoursesCategories from "./CoursesCategories";
export default function Topbar() {
  const [openDrwer, setOpendrawer] = useState(false);
  const [opendialog, setOpendialog] = useState<boolean>(false);

  const [openModalUser, setopenModalUser] = useState<boolean>(false);
  const isLogin = localStorage.getItem("accessToken");

  const exithandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setopenModalUser(false);
    alert("از حساب کاربری خود خارج شدید");
  };

  const OpenDrawer = () => {
    setOpendrawer(true);
  };

  const CloseDarwer = () => {
    setOpendrawer(false);
  };
  const dialoghandler = () => {
    setOpendialog(true);
  };
  const closeModal = () => {
    setOpendialog(false);
  };

  const closeModalUser = () => {
    setopenModalUser(false);
  };
  const modalUser = async () => {
    const response = await UserInfo();

    setopenModalUser(true);
  };

  const styletypomenu = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#008f47",
      borderRadius: "10px",
      fontSize: "20px",
      borer: "none",
    },
  };
  return (
    <Box sx={{ flexFlow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ecf5ed", color: "#000000" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Box sx={{ height: "80px", display: "flex", alignItems: "center" }}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                {isLogin ? (
                  <>
                    <IconButton onClick={modalUser}>
                      <Person3Icon sx={{ fontSize: "35px" }} />
                    </IconButton>

                    <Modal open={openModalUser} onClose={closeModalUser}>
                      <Box
                        sx={{
                          width: "300px",
                          height: "290px",
                          backgroundColor: "white",
                          position: "absolute",
                          top: "60px",
                          left: "20px",
                          display: "flex",
                          flexDirection: "column",
                          padding: "20px",
                          borderRadius: "11px",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            columnGap: "20px",
                            marginBottom: "10px",
                          }}>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "18px",
                              }}>
                              علیرضا حسین زاده
                            </Typography>
                            <Typography
                              sx={{
                                color: "blue",
                                cursor: "pointer",
                                fontSize: "19px",
                              }}>
                              موجودی : 0 تومان
                            </Typography>
                          </Box>
                          <PersonOutlineIcon sx={{ fontSize: "45px" }} />
                        </Box>
                        <Divider />
                        <Stack
                          sx={{ marginTop: "8px", marginBottom: "8px" }}
                          spacing={1}>
                          <Button
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "end",
                              columnGap: "10px",
                              fontSize: "18px",
                              color: "black",

                              "&:hover": {
                                backgroundColor: "#f9f9f9",
                              },
                            }}
                            endIcon={
                              <HomeOutlinedIcon style={{ fontSize: "32px" }} />
                            }>
                            <Link
                              to="/userinfo"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}>
                              پیشخوان
                            </Link>
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
                              <WalletOutlinedIcon
                                style={{ fontSize: "30px" }}
                              />
                            }>
                            دوره های من
                          </Button>
                        </Stack>
                        <Divider />
                        <Button
                          onClick={exithandler}
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
                    </Modal>
                  </>
                ) : (
                  <>
                    <Button
                      sx={{
                        backgroundColor: "#015366",
                        padding: "7px 20px",
                        fontWeight: 700,
                        borderRadius: "25px",
                        zIndex: 999,
                        opacity: "0.9",
                        "&:hover": {
                          backgroundColor: "#015366",
                          opacity: "1",
                        },
                      }}>
                      <Link
                        to="/signup"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontSize: "15px",
                        }}>
                        عضویت
                      </Link>
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "#0ecfff",
                        padding: "7px 23px",
                        fontWeight: 700,
                        borderRadius: "0 20px 20px 0",
                        position: "relative",
                        marginLeft: "-20px",
                        textAlign: "right",
                        opacity: "0.7",
                        "&:hover": {
                          backgroundColor: "#0ecfff",
                          opacity: "1",
                        },
                      }}>
                      <Link
                        to="/login"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          fontSize: "15px",
                        }}>
                        ورود
                      </Link>
                    </Button>
                  </>
                )}
              </Box>
              <IconButton aria-label="delete">
                <ModeNightOutlinedIcon
                  sx={{
                    fontSize: "35px",
                  }}
                />
              </IconButton>
              <IconButton
                aria-label="delete"
                sx={{ position: "relative" }}
                onClick={dialoghandler}>
                <SearchOutlinedIcon
                  sx={{
                    fontSize: "35px",
                  }}
                />
              </IconButton>

              <Modal open={opendialog} onClose={closeModal}>
                <Box>
                  <TextField
                    inputProps={{
                      style: {
                        backgroundColor: "#021E20",
                        color: "whitesmoke",
                        fontSize: "20px",
                        fontWeight: "700",
                        borderRadius: "19px",
                      },
                    }}
                    defaultValue=""
                    label="جستجو در بین دوره ها"
                    sx={{
                      position: "absolute",
                      top: "70px",
                      left: "175px",
                      zIndex: "999",
                      width: "300px",
                      "& .MuiInputLabel-root": {
                        fontSize: "15px",
                        color: "whitesmoke",
                        textAlign: "center",
                      },
                      "& fieldset": {
                        // borderColor: "white",
                        borderRadius: "19px",
                      },

                      "& label.Mui-focused": {
                        fontSize: "14px",
                        color: "whitesmoke", // Adjust the font size as needed
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          // borderColor: "whitesmoke",
                          border: "none",
                        },
                      },
                    }}
                  />
                </Box>
              </Modal>
            </Stack>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}>
              <TypoMenu>مقالات</TypoMenu>

              <CoursesCategories />

              <Box
                component="img"
                sx={{
                  width: "104px",
                  height: "60px",
                  padding: "0 5px",
                  marginLeft: "10px",
                  borderLeft: "1px solid black",
                }}
                src="logo.webp"
              />
            </Stack>
          </Box>
          <Box
            onClick={OpenDrawer}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
              },
            }}>
            <IconButton>
              <ListIcon
                sx={{
                  fontSize: "40px",
                }}
              />
            </IconButton>
          </Box>

          <Drawer
            PaperProps={{
              sx: {
                width: 240,
                backgroundColor: "#183114",
              },
            }}
            variant="temporary"
            onClose={CloseDarwer}
            anchor="right"
            open={openDrwer}>
            <Box>
              <Stack
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  gap: "40px",
                  alignItems: "center",
                }}>
                <TypoDraw>
                  <ArrowDropDownIcon />
                  درباره ما
                </TypoDraw>
                <TypoDraw>
                  <ArrowDropDownIcon />
                  مقالات
                </TypoDraw>
                <TypoDraw>
                  <ArrowDropDownIcon />
                  امنیت
                </TypoDraw>
                <TypoDraw>
                  <ArrowDropDownIcon />
                  پایتون
                </TypoDraw>{" "}
                <TypoDraw>
                  <ArrowDropDownIcon />
                  فرانت اند
                </TypoDraw>
              </Stack>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
