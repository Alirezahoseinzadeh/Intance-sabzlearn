import React from "react";
import { Box } from "@mui/material";

import SecondBoxInLeftSide from "./SecondBoxInLeftSide";
import LastBoxInLeftSide from "./LastBoxInLeftSide";
import FirstBoxInLeftSide from "./firstboxinleftside/FirstBoxInLeftSide";
export default function LeftSide() {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        flex: "3",
        borderRadius: "10px",
      }}>
      <>
        <FirstBoxInLeftSide />
      </>
      <>
        <SecondBoxInLeftSide />
      </>
      <>
        <LastBoxInLeftSide />
      </>
    </Box>
  );
}
