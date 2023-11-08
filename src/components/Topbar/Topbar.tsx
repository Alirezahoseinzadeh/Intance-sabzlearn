import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Drawer,
  TextField,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListIcon from "@mui/icons-material/List";
import Person3Icon from "@mui/icons-material/Person3";
import { UserInfo } from "../../api/ApiService";
import { TypoMenu } from "./Topbar.styles";
import CoursesCategories from "./CoursesCategories";
import { StyleModalSearch, StyleForLogoInAppbar } from "./Topbar.styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
import { AppbarStyle, ToolbalrStyle } from "./Topbar.styles";
import ModalUser from "./ModalUser";
import LoginOrSignInButton from "./LoginOrSignInButton";
import DrawerComponent from "./DrawerComponent";
export default function Topbar() {
  const products = useSelector((state: any) => state.products);

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

  return (
    <Box sx={{ flexFlow: 1 }}>
      <AppBar position="static" sx={AppbarStyle}>
        <Toolbar sx={ToolbalrStyle}>
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
                      <ModalUser clickhandle={exithandler} />
                    </Modal>
                  </>
                ) : (
                  <>
                    <LoginOrSignInButton />
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
              <IconButton aria-label="delete" onClick={dialoghandler}>
                <SearchOutlinedIcon
                  sx={{
                    fontSize: "35px",
                  }}
                />
              </IconButton>

              <IconButton aria-label="delete" sx={{ position: "relative" }}>
                <ShoppingBagIcon
                  sx={{
                    fontSize: "35px",
                    color: "#61615a",
                  }}
                />
                {products.length > 0 ? (
                  <span
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "-1px",
                      left: "30px",
                      fontSize: "17px",
                      backgroundColor: "#00d084",
                      width: "23px",
                      height: "23px",
                      borderRadius: "50%",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    {products.length}
                  </span>
                ) : (
                  ""
                )}
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
                    sx={StyleModalSearch}
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

              <Box component="img" sx={StyleForLogoInAppbar} src="logo.webp" />
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
            <DrawerComponent />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
