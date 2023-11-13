import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Stack,
  Divider,
  Drawer,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
export default function DrawerComponent(props: any) {
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "white",
        },
      }}
      variant="temporary"
      onClose={props.toClose}
      anchor="right"
      open={props.state}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "15px",
          marginTop: "20px",
        }}>
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
        <Stack sx={{ marginTop: "8px", marginBottom: "8px" }} spacing={2}>
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
            endIcon={<WalletOutlinedIcon style={{ fontSize: "30px" }} />}>
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
            endIcon={<MessageOutlinedIcon style={{ fontSize: "30px" }} />}>
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
    </Drawer>
  );
}
