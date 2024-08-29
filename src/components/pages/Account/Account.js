import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Account = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        height={"calc(100vh - 70px)"}
        overflow={{ xl: "hidden", xs: "auto" }}
      >
        <Grid item lg={4} xs={12}>
          <Box
            sx={{
              backgroundColor: "#fff",
              position: "relative",
              borderRadius: "15px",
              marginBottom: "24px",
              padding: "18px",
              height: "100%",
              boxShadow: "0 0 10px 0 rgba(183,192,206,.2)",
            }}
          >
            <Typography variant="h2" sx={{ fontSize: "18px", fontWeight: 600 }}>
              My Profile
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                  paddingTop: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    border: "none",
                  }}
                >
                  <img
                    src={
                      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    }
                    alt="Logo"
                    style={{ objectFit: "contain", width: "70px" }}
                  />
                </Box>
                <Box sx={{ marginLeft: "14px" }}>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: "20px", fontWeight: "500", mb: 1 }}
                  >
                    MARK JECNO
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: 1.7,
                    }}
                  >
                    DESIGNER
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      marginBottom: "11px",
                      color: "#1E1E1E",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Company Code : *
                  </Typography>
                  <TextField fullWidth />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      marginBottom: "11px",
                      color: "#1E1E1E",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Company Name : *
                  </Typography>
                  <TextField fullWidth />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      marginBottom: "11px",
                      color: "#1E1E1E",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Contact Person : *
                  </Typography>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      marginBottom: "11px",
                      color: "#1E1E1E",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Mobile 1 :
                  </Typography>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      marginBottom: "11px",
                      color: "#1E1E1E",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Mobile 2 :
                  </Typography>
                  <TextField fullWidth />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={8}
          xs={12}
          sx={{
            height: { md: "100vh", xs: "100%" },
            overflow: { md: "auto" },
            paddingBottom: "32px",
            marginTop: { md: 0, xs: 4 },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              minHeight: "50px",
              position: "relative",
              borderRadius: "10px",
              marginBottom: "24px",
              boxShadow: "0 0 10px 0 rgba(183,192,206,.2)",
            }}
          >
            <Box sx={{ padding: "15px" }}>
              <Box
                sx={{
                  margin: { md: "1.5rem", sm: "0" },
                  marginBottom: "0",
                  height: "100%",
                  overflow: "auto",
                }}
              >
                <form>
                  <Box>
                    <Grid container spacing={4} py={3}>
                      <Grid item md={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "blue",
                            fontSize: "22px",
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                        >
                          Address
                        </Typography>
                      </Grid>
                      <Grid item xl={6} xs={12} sx={{}}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Address : *
                        </Typography>
                        <TextField
                          sx={{ gridColumn: "1 / 5", width: "100%" }}
                        />
                        <TextField
                          sx={{
                            gridColumn: "1 / 5",
                            width: "100%",
                            mt: { xl: "70px", xs: "30px" },
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        xs={12}
                        sx={{
                          display: { xl: "grid", xs: "flex", flexWrap: "wrap" },
                          rowGap: "32px",
                          columnGap: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            gridColumn: "1/3",
                            gridTemplateColumns: " repeat(2,1fr)",
                          }}
                        >
                          <Typography
                            style={{
                              marginBottom: "11px",
                              color: "#1E1E1E",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            City :
                          </Typography>
                          <TextField
                            sx={{ gridColumn: "1 / 5", width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            gridColumn: "3/5",
                            gridTemplateColumns: " repeat(3,1fr)",
                          }}
                        >
                          <Typography
                            style={{
                              marginBottom: "11px",
                              color: "#1E1E1E",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            State :
                          </Typography>
                          <TextField
                            sx={{ gridColumn: "1 / 5", width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            gridColumn: "1/3",
                          }}
                        >
                          <Typography
                            style={{
                              marginBottom: "11px",
                              color: "#1E1E1E",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Country :
                          </Typography>
                          <TextField fullWidth />
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            gridTemplateColumns: " repeat(3,1fr)",
                          }}
                        >
                          <Typography
                            style={{
                              marginBottom: "11px",
                              color: "#1E1E1E",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Pincode :
                          </Typography>
                          <TextField fullWidth />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Email : *
                        </Typography>
                        <TextField fullWidth />
                      </Grid>
                    </Grid>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        color: "aqua",
                        backgroundColor: "gray",
                        height: "2px",
                      }}
                    />
                    <Grid container spacing={4} py={3}>
                      <Grid item md={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "blue",
                            fontSize: "22px",
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                        >
                          Bank Details
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Bank Name : *
                        </Typography>
                        <TextField fullWidth />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Branch Name :
                        </Typography>
                        <TextField fullWidth />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                          display: "grid",
                          alignItems: "center",
                          gridTemplateColumns: {
                            xl: "repeat(4,1fr)",
                            xs: "repeat(1,1fr)",
                          },
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          IFSC CODE
                        </Typography>
                        <TextField sx={{ gridColumn: "1 / 5" }} />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                          display: "block",
                          gridTemplateColumns: {
                            xl: "repeat(4,1fr)",
                            xs: "repeat(1,1fr)",
                          },
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Account No :*
                        </Typography>
                        <TextField
                          sx={{ gridColumn: "1 / 5", width: "100%" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "grid",
                          alignItems: "center",
                          gridTemplateColumns: {
                            xl: "repeat(4,1fr)",
                            xs: "repeat(1,1fr)",
                          },
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Address :
                        </Typography>
                        <TextField sx={{ gridColumn: "1 / 5" }} />
                      </Grid>
                    </Grid>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        color: "aqua",
                        backgroundColor: "gray",
                        height: "2px",
                      }}
                    />
                    <Grid container spacing={4} py={3}>
                      <Grid item md={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "blue",
                            fontSize: "22px",
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                        >
                          Foreign Bank
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Bank Name : *
                        </Typography>
                        <TextField fullWidth />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                          display: "grid",
                          alignItems: "center",
                          gridTemplateColumns: {
                            xl: "repeat(4,1fr)",
                            xs: "repeat(1,1fr)",
                          },
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Account No :
                        </Typography>
                        <TextField sx={{ gridColumn: "1 / 5" }} />
                      </Grid>
                    </Grid>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        color: "aqua",
                        backgroundColor: "gray",
                        height: "2px",
                      }}
                    />
                    <Grid container spacing={4} py={3}>
                      <Grid item md={12}>
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "blue",
                            fontSize: "22px",
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                        >
                          Local Invoice
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                          display: "grid",
                          alignItems: "center",
                          gridTemplateColumns: {
                            xl: "repeat(4,1fr)",
                            xs: "repeat(1,1fr)",
                          },
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          GSTIN No :
                        </Typography>
                        <TextField sx={{ gridColumn: "1 / 5" }} />
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                          display: "grid",
                          alignItems: "center",
                          gridTemplateColumns: {
                            xl: "repeat(4,1fr)",
                            xs: "repeat(1,1fr)",
                          },
                        }}
                      >
                        <Typography
                          style={{
                            marginBottom: "11px",
                            color: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Pan No :
                        </Typography>
                        <TextField sx={{ gridColumn: "1 / 5" }} />
                      </Grid>
                    </Grid>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        color: "aqua",
                        backgroundColor: "gray",
                        height: "2px",
                      }}
                    />
                    <Grid container spacing={4} py={3}>
                      <Grid item xs={12}>
                        <Box
                          fullWidth
                          sx={{
                            border: "1px dashed #7c7db3",
                            padding: "26px 20px 30px",
                            cursor: "pointer",
                            position: "relative",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                              justifyContent: "center",
                              cursor: "pointer",
                              rowGap: "10px",
                            }}
                          >
                            <Button
                              component="label"
                              variant="contained"
                              sx={{ backgroundColor: "#3f51b5" }}
                              startIcon={<CloudUploadIcon />}
                            >
                              Upload file
                            </Button>
                            <Typography
                              variant="span"
                              fontSize={"15px"}
                              color={"#555"}
                              marginLeft={"5px"}
                            >
                              or drag and drop file here
                            </Typography>
                          </Box>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="avatar"
                            type="file"
                            sx={{
                              cursor: "pointer",
                              opacity: "0",
                              position: "absolute",
                              top: "0",
                              left: "0",
                              height: "92px",
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      mt: "16px",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      component="label"
                      variant="contained"
                      size="medium"
                      type="submit"
                      sx={{ backgroundColor: "#3f51b5" }}
                    >
                      Submit
                    </Button>
                    <Button
                      component="label"
                      variant="contained"
                      size="medium"
                      sx={{ backgroundColor: "#f44336" }}
                    >
                      Cancle
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Account;
