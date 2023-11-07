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
import { StyleMainStack } from "./TilteOfCourses.Style";
import { SublistDesStyle } from "./TilteOfCourses.Style";
import { SublistIdStyle } from "./TilteOfCourses.Style";
import { StyleTitleCourses } from "./TilteOfCourses.Style";
import { StyleListItemButton } from "./TilteOfCourses.Style";
import { StyleListItemButtonCollaps } from "./TilteOfCourses.Style";
import { BoxSubTimeAndDescStyle } from "./TilteOfCourses.Style";
import Taks from "./TitleOfCoursesAssets";
export default function TitleOfCourses() {
  const items = Taks
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
          sx={StyleTitleCourses}>
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
                    sx={StyleListItemButton}>
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
                     <ListItem key={sublist.id}>
                    <ListItemButton
                      sx={StyleListItemButtonCollaps}>
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