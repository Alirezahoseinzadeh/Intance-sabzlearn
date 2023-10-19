import React, { useEffect, useState } from "react";
import { TypoMenu } from "./Topbar.styles";

import { Menu, MenuItem } from "@mui/material";
import { GetCourseCategories } from "../../api/ApiService";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CoursesCategories() {
  const [courseCategories, setcourseCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [open, setOpen] = useState<boolean>(true);

  const handleclick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const closehandler = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await GetCourseCategories();
        setcourseCategories(response.data.data);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    };
    getdata();
  }, []);

  useEffect(() => {
    console.log(courseCategories);
  }, [courseCategories]);
  return (
    <div style={{ display: "flex" }}>
      {courseCategories.map((item: any) => (
        <div key={item.id}>
          <TypoMenu
            key={item.id}
            onMouseEnter={handleclick}
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}>
            {item.courses.length ? <ArrowDropDownIcon /> : null}
            {item.name}
          </TypoMenu>
          {item.courses.length > 0 && (
            <Menu
              sx={{
                ".MuiMenu-paper": {
                  width: "170px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "7px",
                },
                ".MuiMenu-list": {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "end",
                },
                ".MuiMenuItem-root": {
                  backgroundColor: "transparent",
                  fontSize: "15px",
                },
                ".MuiMenuItem-root:hover": {
                  backgroundColor: "inherit",
                  color: "#33A765",
                },
              }}
              id={`basic-menu${item.id}`}
              open={openMenu}
              anchorEl={anchorEl}
              onMouseOutCapture={closehandler}
              anchorOrigin={{
                vertical: "bottom", // Position where the menu will appear vertically
                horizontal: "center", // Position where the menu will appear horizontally
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}>
              {item.courses.map((course: any) => (
                <MenuItem key={course.id}>{course.titleFa}</MenuItem>
              ))}
            </Menu>
          )}
        </div>
      ))}
    </div>
  );
}
