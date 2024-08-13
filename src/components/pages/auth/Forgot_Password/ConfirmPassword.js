import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Login_img from "../../../../assets/login/Loginillustration.png";
import { RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/routing";

const ConfirmPassword = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowX: "hidden",
          px: "15px",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={2} height={"100%"}>
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
              width={"100%"}
              px={"12px"}
              sx={{ height: { md: "22%" } }}
              gap={2}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "left",
                  fontSize: "32px",
                  fontWeight: "550",
                }}
              >
                Create a New Password
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={3}
              >
                <TextField
                  id="Create_password"
                  label="Create password *"
                  name="Create_password"
                  placeholder="Enter your NewPassword"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <RemoveRedEye sx={{ color: "#000" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="Confirm_Password"
                  label="Confirm Password *"
                  name="Confirm_Password"
                  placeholder="Enter your Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <RemoveRedEye sx={{ color: "#000" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sx={{ justifyContent: "end", display: "flex" }}
                >
                  <Button
                    onClick={() => Navigate(Routing.Initial)}
                    variant="contained"
                    size="large"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      marginTop: "5px",
                      background: "#3f51b5",
                      textTransform: "none",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ConfirmPassword;
