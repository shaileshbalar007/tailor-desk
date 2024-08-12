import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

// images

import Login_img from "../../../../assets/login/Loginillustration.png";

// icons
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/routing";

const Forgot_Password = () => {
  const Navigate = useNavigate();
  const [ForgetPassword, setForgetPassword] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <>
      {ForgetPassword === false ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            overflowX: "hidden",
            px: "15px",
            boxSizing: "border-box",
          }}
        >
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
                height={"22%"}
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
                  Forget Password ?
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  gap={3}
                >
                  <TextField
                    id="Mobile"
                    label="Mobile*"
                    name="Mobile"
                    placeholder="Enter your Phone Number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <StayCurrentPortraitIcon sx={{ color: "#000" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      size="large"
                      color="inherit"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "5px",
                        textTransform: "none",
                      }}
                      onClick={() => Navigate(Routing.Login)}
                    >
                      Cancle
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ justifyContent: "end", display: "flex" }}
                  >
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
                      onClick={() => setForgetPassword(true)}
                    >
                      Send OTP
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            overflowX: "hidden",
            px: "15px",
            boxSizing: "border-box",
          }}
        >
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
                sx={{ height: { md: "22%", xs: "80%" } }}
                gap={2}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "left",
                    fontSize: "22px",
                    fontWeight: "550",
                  }}
                >
                  We Have Send OTP on your number
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  gap={3}
                >
                  <MuiOtpInput value={otp} onChange={handleChange} length={6} />
                </Box>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      size="large"
                      color="inherit"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "5px",
                        textTransform: "none",
                      }}
                      onClick={() => setForgetPassword(false)}
                    >
                      Cancle
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{ justifyContent: "end", display: "flex" }}
                  >
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
                    >
                      Verify OTP
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Forgot_Password;
