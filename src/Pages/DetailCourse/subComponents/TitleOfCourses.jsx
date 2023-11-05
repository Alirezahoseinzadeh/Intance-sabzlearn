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
import { StyleMainStack } from "./TitleOfCourses/Style";
import { SublistDesStyle } from "./TitleOfCourses/Style";
import { SublistIdStyle } from "./TitleOfCourses/Style";
import { BoxSubTimeAndDescStyle } from "./TitleOfCourses/Style";
export default function TitleOfCourses() {
  const items = [
    {
      id: 1,
      title: "فصل صفرم : مقدمات",
      sublist : [
        {
          id:1,
          time: "20:01",
          description: "معرفی دوره مصور سازی با پایتون",
        },
        {
          id:2,
          time: "26:44",
          description: "نصب دفترچه ژوپیتر",
        },
        {
          id:3,
          time: "09:34",
          description: "دیتا ست چیست؟",
        },
      ],
      open: false,
    },
    {
      id: 2,
      title: "فصل اول :آشنایی و کار با نامپی",
      sublist : [
        {
          id:1,
          time: "13:22",
          description: "نامپی چیست",
        },
        {
          id:2,
          time: "24:09",
          description: "ساخت آرابه از اشیا و صفات آن"
        },
        {
          id:3,
          time: "11:46",
          description: "ساخت آرایه با مقادیر پیش فرض"
        },
        {
          id:4,
          time: "08:42",
          description: "عملگر های آرایه"
        },
        {
          id:5,
          time: "04:20",
          description: "متد های آماری مهم"
        },
      ],
     
      open: false,
    },
    {
      id: 3,
      title: "فصل دوم : آشنایی و کار با پانداس",
      sublist : [
        {
          id:1,
          time: "08:43",
          description: "آشنایی با پانداس و سری",
        }
      ],
    
      open: false,
    },
  ];
  const [tasks, setTasks] = useState(items);
  
const topenCollpas = (index)=>{
 const UpdateTask = [...tasks]
 UpdateTask[index].open = !UpdateTask[index].open
 setTasks(UpdateTask)
}

  return (
    <>
      <Stack
        spacing={2}
        sx={StyleMainStack}>
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
            {tasks.map((item,index) => (
              <>
                <ListItem key={item.id}>
                  <ListItemButton
                    onClick={()=>topenCollpas(index)}
                    sx={{
                      padding: "13px 3px",
                      backgroundColor: "#c6ecec",
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}>
                    {item.open ? (
                      <ArrowDropUpIcon sx={{ fontSize: "30px" }} />
                    ) : (
                      <ArrowDropDown sx={{ fontSize: "30px" }} />
                    )}
                    <ListItemSecondaryAction>
                      <ListItemText
                        primary={item.title}
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
                <Collapse in={item.open}>
                  {item.sublist.map((sublist)=>(
                    <>
                     <ListItem>
                    <ListItemButton
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "15px 10px",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}>
                      <Box
                        sx={BoxSubTimeAndDescStyle}>
                        <AccessTimeIcon />
                        {sublist.time}
                      </Box>
                      <ListItemSecondaryAction>
                        <Box
                          sx={BoxSubTimeAndDescStyle}>
                          <Typography
                            sx={SublistDesStyle}>
                            {sublist.description}
                          </Typography>
                          <Box
                            sx={SublistIdStyle}>
                            {sublist.id}
                          </Box>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </ListItem>
                    </>
                  ))}
                 
                </Collapse>
              </>
            ))}
          </List>
        </Box>
      </Stack>
    </>
  );
}