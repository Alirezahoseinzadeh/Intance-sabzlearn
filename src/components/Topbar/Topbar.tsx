import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  styled,
  List,
  ListItem,
  Popover,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Topbar() {
  const [open, setOpen] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleclick = (e: any) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };
  const closehandler = () => {};
  const TypoMenu = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    "&:hover": {
      color: "#33ff33",
      backgroundColor: " #7C8685",
      padding: "2px 10px",
      borderRadius: "10px",
      borer: "none",
    },
  });
  return (
    <Box sx={{ flexFlow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
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
                <Button
                  sx={{
                    backgroundColor: "#015366",
                    color: "white",
                    padding: "7px 20px",
                    fontSize: "15px",
                    fontWeight: 700,
                    borderRadius: "25px",
                    zIndex: 999,
                  }}>
                  عضویت
                </Button>
                <Button
                  sx={{
                    backgroundColor: "rgb(14 165 233 / 0.5)",
                    color: "white",
                    padding: "7px 23px",
                    fontSize: "15px",
                    fontWeight: 700,
                    borderRadius: "0 20px 20px 0",
                    position: "relative",
                    marginLeft: "-20px",
                    textAlign: "right",
                  }}>
                  ورود
                </Button>
              </Box>
              <IconButton aria-label="delete">
                <ModeNightOutlinedIcon
                  sx={{
                    fontSize: "30px", // Change the font size as needed
                  }}
                />
              </IconButton>
              <IconButton aria-label="delete">
                <SearchOutlinedIcon
                  sx={{
                    fontSize: "30px", // Change the font size as needed
                  }}
                />
              </IconButton>
            </Stack>
          </Box>
          <Box>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}>
              <TypoMenu>
                <ArrowDropDownIcon />
                درباره ما
              </TypoMenu>
              <TypoMenu>
                <ArrowDropDownIcon />
                مقالات
              </TypoMenu>

              <TypoMenu>
                <ArrowDropDownIcon />
                امنیت
              </TypoMenu>
              <TypoMenu>
                <ArrowDropDownIcon />
                پایتون
              </TypoMenu>
              <TypoMenu
                onClick={handleclick}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}>
                <ArrowDropDownIcon />
                فرانت اند
              </TypoMenu>
              {/* dropdown menu */}
              <Menu
                id="basic-menu"
                open={openMenu}
                anchorEl={anchorEl}
                onClose={closehandler}>
                <MenuItem>HTML آموزش</MenuItem>
                <MenuItem>CSS آموزش</MenuItem>
              </Menu>

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
