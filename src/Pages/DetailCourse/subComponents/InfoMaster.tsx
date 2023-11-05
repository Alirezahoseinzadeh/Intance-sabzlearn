import React from "react";
import { Stack, Avatar, Box, Typography } from "@mui/material";
export default function InfoMaster() {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
        }}>
        <Box sx={{ margin: "0 auto" }}>
          <Avatar
            src="image/master.png"
            sx={{ width: "90px", height: "90px", marginTop: "20px" }}
          />
        </Box>
        <Typography
          sx={{
            textAlign: "Center",
            marginTop: "10px",
            fontSize: "20px",
            fontWeight: "600",
          }}>
          رضا دولتی
        </Typography>
        <Typography
          sx={{
            textAlign: "Center",
            marginTop: "3px",
            opacity: "0.8",
            fontSize: "16px",
          }}>
          مدرس دوره
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            marginTop: "7px",
            opacity: "0.9",
            fontSize: "16px",
            padding: "3px 18px",
            color: "gray",
            paddingBottom: "10px",
          }}>
          تقریبا 10 ساله در زمینه برنامه نویسی فعال هستم، 5 سال پیش اولین شرکت
          خودم رو تاسیس کردم، 1 سال پیش اولین فروشگاه اینترنتی خودم رو توسعه
          دادم. عاشق زبان برنامه نویسی پایتون هستم و در کنار پایتون زبان های
          دیگه ای رو هم کار میکنم. در حال حاضر، توسعه دهنده بک اند با جنگو و
          فارغ التحصیل رشته امنیت از دانشگاه سراسری تبریز هستم و 3 ساله در زمینه
          هوش مصنوعی هم فعالیت میکنم.{" "}
        </Typography>
      </Stack>
    </>
  );
}
