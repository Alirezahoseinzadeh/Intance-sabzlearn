import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import Login from "./Pages/Log_In";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogInEmail from "./Pages/LogInEmail";
import Roles from "./Pages/Roles";
import SignUp from "./Pages/SignUp";
import InfoUser from "./Pages/InfoUser/InfoUser";
import DetailCourse from "./Pages/DetailCourse/DetaiCourse";
import ConfirmCode from "./Pages/ConfirmCode/ConfirmCode";
import Orders from "./Pages/oreders/Orders";

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailcourse/:id" element={<DetailCourse />} />
        <Route path="/login/*" element={<Login />}></Route>
        <Route path="/loginemail" element={<LogInEmail />} />
        <Route path="role" element={<Roles />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userinfo" element={<InfoUser />} />
        <Route path="/confirmcode" element={<ConfirmCode />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Box>
  );
}
