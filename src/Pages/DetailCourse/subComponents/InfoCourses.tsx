import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import SlowMotionVideoRoundedIcon from "@mui/icons-material/SlowMotionVideoRounded";

interface InfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function InfoCard({ title, value, icon }: InfoCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1px",
          padding: "10px",
          backgroundColor: "white",
          justifyContent: "end",
          borderRadius: "10px",
        }}>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "12px", marginTop: "5px" }}>
            {value}
          </Typography>
        </Box>
        <IconButton>{icon}</IconButton>
      </Box>
    </Grid>
  );
}
export default function InfoCourses() {
  return (
    <>
      <Grid container spacing={3}>
        <InfoCard
          title="آخرین بروز رسانی"
          value="1402/06/21"
          icon={
            <CalendarMonthRoundedIcon
              sx={{ color: "green", fontSize: "40px" }}
            />
          }
        />
        <InfoCard
          title="مدت زمان دوره"
          value="12 ساعت"
          icon={
            <AccessAlarmOutlinedIcon
              sx={{ color: "green", fontSize: "40px" }}
            />
          }
        />
        <InfoCard
          title="وضعیت دوره"
          value="تکمیل شده"
          icon={
            <GppMaybeOutlinedIcon sx={{ color: "green", fontSize: "40px" }} />
          }
        />
        <InfoCard
          title="نوع مشاهده"
          value="دانلودی/آنلاین"
          icon={
            <SlowMotionVideoRoundedIcon
              sx={{ color: "green", fontSize: "40px" }}
            />
          }
        />
        <InfoCard
          title="پیش نیاز"
          value="JS"
          icon={
            <LocalMallRoundedIcon sx={{ color: "green", fontSize: "40px" }} />
          }
        />
        <InfoCard
          title="روش پشتیبانی"
          value="آنلاین"
          icon={
            <GroupAddOutlinedIcon sx={{ color: "green", fontSize: "40px" }} />
          }
        />
      </Grid>
    </>
  );
}
