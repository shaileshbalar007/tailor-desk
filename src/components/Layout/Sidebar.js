import React, { useState } from "react";
// Mui
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

// icon/Images
import Logo from "../../assets/logo/codelinelogo.jfif";

// Mui
import { Avatar, Box, Collapse, Drawer } from "@mui/material";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import PendingActionsTwoToneIcon from "@mui/icons-material/PendingActionsTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";

import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  NavigateNextOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SidbarNavigation = [
  {
    Navigate: "Master",
    icon: <PendingActionsTwoToneIcon />,
    Path: "/master",
    Role: "admin",
    sub: [
      {
        Navigate: "Item Master",
        icon: <GroupTwoToneIcon />,
        Path: "/master/item_Master",
        Role: "admin",
      },
      {
        Navigate: "Pattern Master ",
        icon: <GroupTwoToneIcon />,
        Path: "/master/pattern_master",
        Role: "admin",
      },
    ],
  },
];
const Sidebar = ({ isClosing, handleDrawerTransitionEnd }) => {
  const location = window.location.pathname;

  const [expandedItem, setExpandedItem] = useState(null);

  const navigate = useNavigate();

  const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));

  const handleItemClick = (index, Path) => {
    if (SidbarNavigation[index]?.sub) {
      setExpandedItem((prevExpanded) => {
        if (prevExpanded === index) {
          return null;
        } else {
          return index;
        }
      });
    } else if (Path) {
      navigate(Path);
    }
  };

  const heandlelogout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("logout successful");
  };

  return (
    <>
      <Drawer
        open={isClosing}
        variant="permanent"
        sx={{
          zIndex: "9999",
          position: "relative",
          border: "none",
          display: isClosing === true ? "block" : { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            // width: drawerWidth,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "15px",
            border: "none",
            height: "120px",
          }}
        >
          <img src={Logo} alt="Logo" style={{ objectFit: "contain" }} />
        </Box>
        <Box sx={{ pb: "25px" }}>
          <Box sx={{ pt: "0px", pb: "10px" }}>
            <Avatar
              sx={{
                backgroundColor: "white",
                width: "75px",
                height: "75px",
                borderRadius: "15px",
                mx: "auto",
                boxShadow: "10px 10px 13px #4e4e4e26",
              }}
              variant="square"
            >
              <img
                src={
                  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                }
                alt="user-img"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Avatar>
          </Box>
          <Typography
            fontSize={"14px"}
            color={"#060606"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            {userDetail?.username}
          </Typography>
          <Typography
            fontSize={"12px"}
            color={"#000"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            {userDetail?.role}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "250px",
          }}
        >
          <List
            sx={{
              pt: "0",
              border: "none",
            }}
          >
            {SidbarNavigation.map(
              (item, index) =>
                userDetail?.role === item.Role && (
                  <div key={index}>
                    <ListItemButton
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "9px",
                        margin: "8px 11px 0",

                        backgroundColor: `${
                          item.Path === location ? "rgba(0, 0, 0, 0.04)" : ""
                        }`,
                      }}
                      onClick={() => handleItemClick(index, item.Path)}
                    >
                      <Box sx={{ display: "flex" }}>
                        <ListItemIcon sx={{ minWidth: "36px" }}>
                          {item.icon}
                        </ListItemIcon>

                        <Typography
                          sx={{
                            color: `${item.Path === location ? "#5668f3" : ""}`,
                            fontWeight: `${
                              item.Path === location ? "500" : "400"
                            }`,
                            fontSize: "14px",
                          }}
                        >
                          {item?.Navigate}
                        </Typography>
                      </Box>
                      {item?.sub &&
                        (expandedItem === index ? (
                          <ExpandLessOutlined />
                        ) : (
                          <ExpandMoreOutlined />
                        ))}
                    </ListItemButton>

                    {item?.sub && (
                      <Collapse in={expandedItem === index} unmountOnExit>
                        <List component="div" disablePadding>
                          {item?.sub?.map((sub_item) => (
                            <ListItemButton
                              onClick={() => navigate(sub_item.Path)}
                              sx={{
                                pl: "35px",
                                py: "4px",
                                textAlign: "center",
                                alignItems: "center",
                                margin: "8px 11px 0",
                                backgroundColor: `${
                                  sub_item.Path === location
                                    ? "rgba(0, 0, 0, 0.04)"
                                    : ""
                                }`,
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: "35px" }}>
                                <NavigateNextOutlined
                                  sx={{
                                    color: `${
                                      sub_item.Path === location
                                        ? "#5668f3"
                                        : ""
                                    }`,
                                  }}
                                />
                              </ListItemIcon>
                              <Typography
                                sx={{
                                  color: `${
                                    sub_item.Path === location ? "#5668f3" : ""
                                  }`,
                                  fontWeight: `${
                                    sub_item.Path === location ? "500" : "400"
                                  }`,
                                  fontSize: "14px",
                                }}
                              >
                                {sub_item?.Navigate}
                              </Typography>
                              {/* <ListItemText primary={sub_item?.Navigate} /> */}
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </div>
                )
            )}
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px",
                margin: "8px 11px 0",
              }}
              onClick={() => heandlelogout()}
            >
              <Box sx={{ display: "flex" }}>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  <LogoutTwoToneIcon />
                </ListItemIcon>

                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  Log Out
                </Typography>
              </Box>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
