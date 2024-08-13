import React from "react";
// mui
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  LoginOutlined,
  Person2Outlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Routing } from "../shared/routing";
import { toast } from "react-toastify";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ handleDrawerToggle }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const userDetail = JSON.parse(window.localStorage.getItem("userDetail"));
  const navigate = useNavigate();

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  const heandlelogout = () => {
    navigate("/login");
    toast.success("logout successful");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "3px 10px 10px #b7c0ce33",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", pl: "25px" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ color: "#000" }} />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: "#000", marginLeft: "auto", fontSize: "18px" }}
        >
          hello ! good {getTimeOfDay()} {userDetail?.username}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Typography
              sx={{ fontSize: "14px", color: "#000", fontWeight: "600" }}
            >
              {userDetail?.username}
            </Typography>
            <Avatar
              alt="User-img"
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              sx={{ width: "30px", height: "30px", marginLeft: "12px" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "-130px",
                width: "200px",
                bgcolor: "#fff",
                boxShadow:
                  "0 5px 5px -3px #0003, 0 8px 10px 1px #00000024, 0 3px 14px 2px #0000001f",
                display: `${dropdownOpen === true ? "block" : "none"}`,
                zIndex: "9999",
                //   display: { dropdownOpen===true? "block":"none" },
              }}
            >
              <List sx={{ padding: "0" }}>
                <ListItem
                  onClick={() => navigate(Routing.Account)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 5%)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                  >
                    <Person2Outlined />
                    <ListItemText>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Account
                      </Typography>
                    </ListItemText>
                  </ListItemIcon>
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 5%)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                  >
                    <SettingsOutlined />
                    <ListItemText>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Settings
                      </Typography>
                    </ListItemText>
                  </ListItemIcon>
                </ListItem>
                <Divider />

                <ListItem
                  onClick={heandlelogout}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 5%)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <LoginOutlined />
                    <ListItemText>
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Logout
                      </Typography>
                    </ListItemText>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
