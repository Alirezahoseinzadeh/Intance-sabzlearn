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
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";

export default function Topbar() {
  const [open, setOpen] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleclick = (e: any) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };
  const closehandler = () => {
    setAnchorEl(null);
  };
  const TypoMenu = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    "&:hover": {
      color: "#33ff33",
      //   backgroundColor: " #7C8685",
      padding: "2px 10px",
      borderRadius: "10px",
      borer: "none",
    },
  });
  const styletypomenu = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    "&:hover": {
      color: "#33ff33",
      //   backgroundColor: " #7C8685",
      padding: "2px 10px",
      borderRadius: "10px",
      borer: "none",
    },
  };
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
                    fontSize: "35px",
                  }}
                />
              </IconButton>
              <IconButton aria-label="delete">
                <SearchOutlinedIcon
                  sx={{
                    fontSize: "35px",
                  }}
                />
              </IconButton>
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

              <Typography
                sx={styletypomenu}
                onClick={handleclick}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}>
                <ArrowDropDownIcon />
                فرانت اند
              </Typography>
              {/* dropdown menu */}

              <Menu
                sx={{
                  ".MuiMenu-paper": {
                    width: "170px",
                    height: "400px",
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "7px",
                  },
                  ".MuiMenu-list": {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "end",
                  },
                }}
                id="basic-menu"
                open={openMenu}
                anchorEl={anchorEl}
                onClose={closehandler}
                anchorOrigin={{
                  vertical: "bottom", // Position where the menu will appear vertically
                  horizontal: "center", // Position where the menu will appear horizontally
                }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}>
                <MenuItem>HTML آموزش</MenuItem>
                <MenuItem>CSS آموزش</MenuItem>
                <MenuItem>Flex Box آموزش</MenuItem>
                <MenuItem>React آموزش</MenuItem>
                <MenuItem>Angular آموزش</MenuItem>
                <MenuItem>Java Script آموزش</MenuItem>
                <MenuItem>TailWind آموزش</MenuItem>
                <MenuItem>Material UI آموزش</MenuItem>
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
          <Box
            sx={{
              display: {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import React from "react";

// export default function Topbar() {
//   return (
//     <div>
//       <ul
//         style={{
//           width: "500px",
//           backgroundColor: "red",
//           display: "flex",
//           flexDirection: "column",
//         }}>
//         <li style={{ width: "100%", textAlign: "right" }}>asdad</li>
//         <li style={{ width: "100%" }}>asdad</li>
//         <li style={{ width: "100%" }}>asdad</li>
//       </ul>
//     </div>
//   );
// }
