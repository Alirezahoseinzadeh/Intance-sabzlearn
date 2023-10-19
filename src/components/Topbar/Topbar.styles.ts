import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TypoMenu = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginRight:"10px",
    "&:hover": {
      color: "#008f47",
      borderRadius: "10px",
      fontSize: "20px",
      borer: "none",
    },
  });
   export const TypoDraw = styled(Typography)({
    width: "90%",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "20px",
    wordSpacing: "1px",
    color: "white",
    "&:hover": {
      color: "#dcde9f",
      borderBottom: "1px solid white",
      borderRadius: "7px",
    },
  });