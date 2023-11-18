import React, { useState } from "react";
import "./Home.css";
import Sabzlearn_Section from "../../components/sabzlearn-section/Sabzlearn_Section";
import Topbar from "../../components/Topbar/Topbar";
import Section_Content from "../../components/Section_content/Section_Content";
import Section_Head from "../../components/section-head/Section_Head";
import Slider_Content from "../../components/slider-content/Slider_Content";
import { Box, Stack } from "@mui/material";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <>
      <Topbar />
      <Box component="main" className="main">
        <Stack>
          <Sabzlearn_Section />
          <Section_Head
            des="آخرین دوره ها"
            title="سکوی پرتاپ شما به سمت موفقیت"
            title2="مشاهده همه دروه ها"
          />
          <Section_Content />
          <Section_Head
            des="محبوب ترین دوره ها"
            title="یادگیری و رشد توسعه فردی"
            title2="مشاهده همه مطالب"
          />
          <Slider_Content />
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
