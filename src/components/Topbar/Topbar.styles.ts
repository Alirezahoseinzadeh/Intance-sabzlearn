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

  export const StyleModalSearch = {
    position: "absolute",
    top: "70px",
    left: "175px",
    zIndex: "999",
    width: "300px",
    "& .MuiInputLabel-root": {
      fontSize: "15px",
      color: "whitesmoke",
      textAlign: "center",
    },
    "& fieldset": {
      borderRadius: "19px",
    },

    "& label.Mui-focused": {
      fontSize: "14px",
      color: "whitesmoke",
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        border: "none",
      },
    },
  };


 export const AppbarStyle = {
    backgroundColor: "#ecf5ed",
    color: "#000000",
  };

export const ToolbalrStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  export const ModalUserInfoStyle = {
    width: "300px",
    height: "260px",
    backgroundColor: "white",
    position: "absolute",
    top: "60px",
    left: "20px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "11px",
  };

export const ButtonStyleForPishkhan = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    columnGap: "10px",
    fontSize: "18px",
    color: "black",

    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  };

export const ButtonStyleForExit = {
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
};

export const StyleForLogoInAppbar = {
  width: "104px",
  height: "60px",
  padding: "0 5px",
  marginLeft: "10px",
  borderLeft: "1px solid black",
};
