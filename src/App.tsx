import React from "react";
import { Box, Stack } from "@mui/material";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Sabzlearn_Section from "./components/sabzlearn-section/Sabzlearn_Section";
import Section_Head from "./components/section-head/Section_Head";
import Section_Content from "./components/Section_content/Section_Content";
import Slider_Content from "./components/slider-content/Slider_Content";

export default function App() {
  return (
    <Box>
      <Topbar />
      <Box component="main" className="main">
        <Stack>
          <Sabzlearn_Section />
          <Section_Head
            des="آخرین دوره ها"
            title="سکوی پرتاپ شما به سمت موفقیت"
          />
          <Section_Content />
          <Section_Head
            des="محبوب ترین دوره ها"
            title="یادگیری و رشد توسعه فردی"
          />
          <Slider_Content />
        </Stack>
      </Box>
    </Box>
  );
}
