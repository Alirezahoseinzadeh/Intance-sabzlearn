import React from "react";
import Slider from "react-slick";
import {
  Container,
  CardMedia,
  Card,
  Typography,
  Button,
  Stack,
  Box,
  CardContent,
} from "@mui/material";
import Products from "../Section_content/Utils";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import "./Slider_Content.css";
export default function Slider_Content() {
  const Product = Products;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cardStyle = {
    borderRadius: "10px",
    width: "200px", // Set the width to 200px
  };
  return (
    <Container maxWidth="md" className="height">
      <Slider {...settings}>
        {Products.map((item) => (
          <Card sx={cardStyle}>
            <CardMedia
              component="img"
              src={item.src}
              sx={{ height: "168px" }}
            />
            <CardContent sx={{ textAlign: "right" }}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  fontSize: "14px",
                  fontWeight: "800",
                  borderRadius: "20px",
                  backgroundColor: "#03707d",
                }}>
                {item.name}
              </Button>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { md: "15px", sm: "17px", xs: "19px" },
                  fontWeight: "900",
                  marginTop: "10px",
                }}>
                {item.title}
                <span style={{ color: "#008f47" }}>2023</span>
              </Typography>
              <hr />
              <Typography
                sx={{
                  fontSize: { md: "14px", sm: "16px", xs: "18px" },
                  fontWeight: "700",
                  color: "#777661",
                }}>
                {item.describtion}
              </Typography>
              <Stack sx={{ marginTop: "10px" }}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "10px",
                    "&:hover": {
                      color: "#367d56",
                    },
                  }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "15px",
                      color: "#777661",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#367d56",
                        fontWeight: "600",
                      },
                    }}>
                    {item.auther}
                  </Typography>
                  <PersonAddAltOutlinedIcon />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Container>
  );
}
