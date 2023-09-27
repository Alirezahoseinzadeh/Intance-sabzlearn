import React from "react";
import Products from "../Section_content/Utils";
import {
  Container,
  Grid,
  CardMedia,
  Card,
  Typography,
  Button,
  Stack,
  Box,
  CardContent,
} from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
export default function Card() {
  const Product = Products;
  const cardStyle = {
    borderRadius: "10px",
    width: "300px", // Set the width to 200px
  };
  return (
    <div>
      <Card sx={cardStyle}>
        <CardMedia component="img" src={item.src} sx={{ height: "168px" }} />
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
            آموزش بوت استرپ 5 مقدماتی تا پیشرفته{" "}
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
    </div>
  );
}
