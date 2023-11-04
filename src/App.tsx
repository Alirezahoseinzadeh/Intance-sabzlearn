import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import "./App.css";
import Login from "./Pages/Log_In";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogInEmail from "./Pages/LogInEmail";
import Roles from "./Pages/Roles";
import SignUp from "./Pages/SignUp";
import InfoUser from "./Pages/InfoUser";

import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { UserContext } from "./ContextApi";
import DetailCourse from "./Pages/DetailCourse/DetaiCourse";
import ConfirmCode from "./Pages/ConfirmCode/ConfirmCode";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />}></Route>
          <Route path="/loginemail" element={<LogInEmail />} />
          <Route path="role" element={<Roles />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userinfo" element={<InfoUser />} />
          <Route path="/confirmcode" element={<ConfirmCode />} />
        </Routes> */}
        <DetailCourse />
      </Box>
    </ThemeProvider>
  );
}
