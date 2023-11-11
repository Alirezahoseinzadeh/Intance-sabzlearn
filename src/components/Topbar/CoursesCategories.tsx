import React, { useEffect, useState } from "react";
import { TypoMenu } from "./Topbar.styles";

import { Menu, MenuItem } from "@mui/material";
import { GetCourseCategories } from "../../api/ApiService";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CoursesCategories() {
  const [courseCategories, setcourseCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({}); // Use an object to manage the state of each category's menu

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

  useEffect(() => {}, [courseCategories]);

  const handleOpenMenu = (
    categoryId: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    setOpenMenus({ ...openMenus, [categoryId]: true });
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const closehandler = () => {
    setOpenMenus({});
  };

  return (
    <div style={{ display: "flex" }}>
      {courseCategories.map((item: any) => (
        <div key={item.id}>
          <TypoMenu
            key={item.id}
            onMouseEnter={(event: any) => handleOpenMenu(item.id, event)}
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={openMenus[item.id] ? "true" : undefined}>
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
              open={openMenus[item.id]}
              anchorEl={anchorEl}
              onMouseOutCapture={closehandler}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
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
