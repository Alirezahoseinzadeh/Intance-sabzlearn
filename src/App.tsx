import React from "react";
import { Box, Stack } from "@mui/material";
import "./App.css";
import Login from "./Pages/Log_In";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogInEmail from "./Pages/LogInEmail";
import Roles from "./Pages/Roles";
import SignUp from "./Pages/SignUp";
export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginemail" element={<LogInEmail />} />
        <Route path="role" element={<Roles />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
}
