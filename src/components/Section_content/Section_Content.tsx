import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
export default function Section_Content() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ borderRadius: "10px" }}>
            <CardMedia
              component="img"
              src="image/bootstrap.jpg"
              sx={{ height: "168px" }}
            />
            <CardContent sx={{ textAlign: "right" }}>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  fontWeight: "800",
                  borderRadius: "10px",
                }}>
                فرانت اند
              </Button>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { md: "15px", sm: "20px", xs: "25px" },
                  fontWeight: "900",
                  marginTop: "5px",
                }}>
                آموزش بوت استرپ 5 مقدماتی تا پیشرفته{" "}
                <span style={{ color: "#008f47" }}>2023</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "14px", sm: "20px", xs: "25px" },
                  fontWeight: "700",
                  color: "#777661",
                }}>
                خوش آمدید به بهترین آموزش بوتسترپ ورژن 5 در ایران ، با ما همراه
                باشید
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
                    محمد امین سعیدی راد
                  </Typography>
                  <PersonAddAltOutlinedIcon />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              src="image/nodejs.jpg"
              sx={{ height: "168px" }}
            />
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              src="image/PWA.jpg"
              sx={{ height: "168px" }}
            />
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              src="image/gpt.png"
              sx={{ height: "168px" }}
            />
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              src="image/phyton.png"
              sx={{ height: "168px" }}
            />
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card>
            <CardMedia
              component="img"
              src="image/sabz.png"
              sx={{ height: "168px" }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
