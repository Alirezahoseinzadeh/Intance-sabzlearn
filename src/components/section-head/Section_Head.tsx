import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
export default function Section_Head() {
  const styleMainStack = {
    position: { xs: "relative", sm: "static" },
    height: { xs: "100px" },
  };
  const f_chld_main_stck = {
    position: { xs: "absolute", sm: "static" },
    bottom: { xs: 0 },
    left: { xs: 0 },
  };
  const sec_chld_main_stck = {
    position: { xs: "absolute", sm: "static" },
    top: { xs: 0 },
    right: { xs: 0 },
  };
  const leftBox = {
    backgroundColor: "inherit",
    color: "#1f2b6c",
    fontSize: { sm: "15px", md: "20px" },
    fontWeight: "600",
    ".MuiButton-startIcon": {
      color: "black",
      "& hover": {
        backgroundColor: "inherit",
      },
    },
  };

  const Boxrightlastsource = {
    background: "#eec03a",
    width: "15px",
    height: "15px",
    borderRadius: "4px",
  };

  const Typolastcourcestyle = {
    fontSize: { xs: "20px", sm: "24px", md: "27px" },
    fontWeight: "800",
  };

  const TyposecondStyle = {
    fontSize: { xs: "13px", sm: "16px", md: "18px" },
    fontWeight: "600",
    color: "#686868",
    letterSpacing: "2px",
  };

  const stylerightbox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: "10px",
  };
  return (
    <Container maxWidth="md">
      <Stack
        sx={styleMainStack}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop="70px">
        <Box sx={f_chld_main_stck}>
          <Button
            startIcon={<KeyboardDoubleArrowLeftIcon style={{ fontSize: 30 }} />}
            sx={leftBox}>
            مشاهده همه دوه ها
          </Button>
        </Box>
        <Stack spacing={1} sx={sec_chld_main_stck}>
          <Box sx={stylerightbox}>
            <Typography sx={Typolastcourcestyle}>آخرین دوره ها</Typography>
            <Box component="div" sx={Boxrightlastsource} />
          </Box>
          <Typography sx={TyposecondStyle}>
            سکوی پرتاپ شما به سمت موفقیت
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
