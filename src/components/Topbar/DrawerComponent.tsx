import React from "react";
import { TypoDraw } from "./Topbar.styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Stack } from "@mui/material";
export default function DrawerComponent() {
  return (
    <>
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
    </>
  );
}
