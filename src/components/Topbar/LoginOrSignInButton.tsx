import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LoginOrSignInButton() {
  const isSmallScreen = useMediaQuery("(max-width:500px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:501px) and (max-width:980px)"
  );
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#015366",
          padding: isSmallScreen
            ? "3px 11px"
            : isMediumScreen
            ? "4px 14px"
            : "7px 20px",
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
          padding: isSmallScreen
            ? "3px 11px"
            : isMediumScreen
            ? "4px 14px"
            : "7px 20px",
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
  );
}
