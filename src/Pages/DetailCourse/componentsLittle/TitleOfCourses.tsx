import React, { useState } from "react";

import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
export default function TitleOfCourses() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          marginTop: "20px",
          backgroundColor: "white",
          padding: "10px 14px",
          borderRadius: "10px",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Typography>03:58</Typography>
          <Typography
            sx={{
              fontSize: " 1.675rem",
              fontWeight: "700",
              fontStyle: "oblique",
            }}>
            سرفصل های دوره
          </Typography>
        </Box>
        <Box>
          <List sx={{ backgroundColor: "#ebeded", borderRadius: "10px" }}>
            <ListItem>
              <ListItemButton
                onClick={() => setOpen(!open)}
                sx={{
                  padding: "13px 3px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}>
                {open ? (
                  <ArrowDropUpIcon sx={{ fontSize: "30px" }} />
                ) : (
                  <ArrowDropDown sx={{ fontSize: "30px" }} />
                )}
                <ListItemSecondaryAction>
                  <ListItemText
                    primary="فصل صفرم : مقدمات "
                    sx={{
                      ".MuiListItemText-primary": {
                        fontSize: "20px",
                        fontWeight: "500",
                      },
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>
            <Collapse in={open}>
              <ListItem>
                <ListItemButton
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "Center",
                      gap: "10px",
                    }}>
                    <AccessTimeIcon />
                    20:01
                  </Box>
                  <ListItemSecondaryAction>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}>
                      <Typography
                        sx={{
                          color: "green",
                          fontWeight: "500",
                          fontSize: "18px",
                        }}>
                        معرفی دوره مصور سازی با پایتون
                      </Typography>
                      <Box
                        sx={{
                          width: "25px",
                          height: "25px",
                          background: "green",
                          borderRadius: "50%",
                          textAlign: "center",
                          color: "white",
                        }}>
                        1
                      </Box>
                    </Box>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItem>
            </Collapse>
          </List>
        </Box>
      </Stack>
    </>
  );
}
