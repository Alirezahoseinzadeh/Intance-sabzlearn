import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NotStartedIcon from "@mui/icons-material/NotStarted";
export default function Sabzlearn_Section() {
  return (
    <Container maxWidth="md">
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
        spacing={{ xs: 2, md: 8 }}
        sx={{
          backgroundColor: "inherit",
          marginTop: "30px",
        }}>
        <Box
          component="img"
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            height: "400px",
          }}
          src="boy-light.svg"
        />
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            rowGap: "25px",
            paddingRight: "10px",
          }}>
          <Typography
            sx={{
              marginTop: "40px",
              textAlign: { xs: "center", md: "right" },
              fontSize: { xs: "25px", md: "35px" },
              fontWeight: "900",
              paddingRight: "10px",
            }}>
            ما به هر قیمتی
            <br /> ✌ دوره تولید نمی کنیم
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "right" },
              fontSize: { xs: "15px", md: "20px" },
              fontWeight: "500",
              paddingRight: "10px",
            }}>
            با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
            پیشرفت کن
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}>
            <Button
              sx={{
                color: "#08051b",
                fontSize: "20px",
                ".MuiButton-endIcon": {
                  color: "#6D8C00",
                  "&:hover": {
                    color: "#338309",
                  },
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              endIcon={<NotStartedIcon style={{ fontSize: "45px" }} />}>
              ما کی هستیم؟
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                fontSize: "15px",
                fontWeight: "600",
              }}>
              از اینجا شروع کن
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
