import React, { useState } from "react";
import ReactPlayer from "react-player";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "../../../components/Section_content/Utils";
import { addToBagShop } from "../../../store/CreateSlice";
export default function HeadInfoCourses() {
  const [ProductData, setProductsData] = useState(Products);
  const dispatch = useDispatch();
  let params = useParams();

  const product: any = ProductData.find((item: any) => item.id == params.id);
  console.log(product);

  const addToBagShops = (product: any) => {
    dispatch(addToBagShop(product));
  };

  return (
    <>
      <Box>
        <ReactPlayer
          url="asist/redux.mp4"
          controls={true}
          width="500px"
          height="200px"
          style={{
            backgroundColor: "black",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", direction: "rtl" }}>
          {product ? product.title : ""}
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            marginTop: "10px",
            opacity: "0.7",
            direction: "rtl",
          }}>
          الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و
          یکی از دلایل استفاده از این تکنولوژی فارغ از یه خیلی از مزایاش برای
          برنامه نویسا(کسب و کار ها به کنار) همین بازار کارشه و ما توی این دوره
          از نقطه منفی صفر حتی اگه جاوااسکریپت بلد نباشید هم بهتون یادش میدیم و
          بعد میریم .
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "40px",
          }}>
          <Typography sx={{ direction: "rtl" }}> 4,350,000 تومان</Typography>
          <Button
            onClick={() => addToBagShops(product)}
            variant="contained"
            endIcon={<VerifiedUserIcon />}
            sx={{
              fontSize: "15px",
              backgroundColor: "#00d084",
              "&:hover": {
                backgroundColor: "#00d084",
              },
            }}>
            افزودن به سبد خرید
          </Button>
        </Box>
      </Box>
    </>
  );
}
