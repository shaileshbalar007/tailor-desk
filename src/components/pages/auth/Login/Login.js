import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// images

import Login_img from "../../../../assets/login/Loginillustration.png";

// icons
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import { Routing } from "../../../shared/routing";

const Login = () => {
  const Navigate = useNavigate();

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
        <Grid container spacing={0} height={"100%"}>
          <Grid
            item
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
            height={"100%"}
            width={"100%"}
          >
            <Box height={"100%"} overflow={"hidden"}>
              <img
                src={Login_img}
                alt="Login-img"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            // width={"410px"}
            width={"100%"}
            alignItems={"center"}
            position={"revert"}
            zIndex={"99999999"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              maxWidth={"500px"}
              px={"12px"}
              height={"62%"}
              gap={2}
            >
              <Typography
                variant="h2"
                sx={{ textAlign: "left", fontSize: "32px", fontWeight: "550" }}
              >
                Welcome to Codeline Portal
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={3}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "left",
                    fontSize: "32px",
                    fontWeight: "600",
                  }}
                >
                  Sign in
                </Typography>
                <TextField
                  id="Mobile"
                  label="Mobile*"
                  name="Mobile"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FaceTwoToneIcon sx={{ color: "#000" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password*"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityTwoToneIcon
                          sx={{ color: "#000", cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "5px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                  <Link to={Routing.Forgot_Password}>Forgot Password?</Link>
                </Box>
              </Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginTop: "5px",
                  background: "#3f51b5",
                  textTransform: "none",
                }}
                onClick={() => Navigate(Routing.ItemMaster)}
                // onClick={Heanle}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
