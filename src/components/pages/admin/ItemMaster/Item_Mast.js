import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";

const Item_Mast = () => {
  const [open, setOpen] = React.useState(false);
  const [Top, setTop] = React.useState({
    Top: "",
    Bottom: "",
    MeasurementPrint: "",
    SpecialItem: "",
  });
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "SHIRT",
      rate: 600.0,
      top: true,
      bottom: false,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 2,
      name: "PANT",
      rate: 550.0,
      top: false,
      bottom: true,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 3,
      name: "COAT",
      rate: 3200.0,
      top: true,
      bottom: false,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 4,
      name: "PAYJAMA",
      rate: 400.0,
      top: false,
      bottom: true,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 5,
      name: "CHUDIDAR",
      rate: 300.0,
      top: false,
      bottom: true,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 6,
      name: "PATYALA",
      rate: 300.0,
      top: false,
      bottom: true,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 7,
      name: "JODHPIRI SHUIT",
      rate: 3650.0,
      top: true,
      bottom: false,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 8,
      name: "VESR KOTI",
      rate: 1500.0,
      top: true,
      bottom: false,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 9,
      name: "SAFARI",
      rate: 850.0,
      top: true,
      bottom: false,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
    {
      id: 10,
      name: "KURTA",
      rate: 550.0,
      top: true,
      bottom: false,
      measurement_Print: true,
      special_item: true,
      sketch_image: null,
    },
  ]);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      flex: 1,
    },
    {
      field: "rate",
      headerName: "Rate",
      editable: true,
      with: "auto",
      flex: 1,
    },
    {
      field: "top",
      headerName: "Top",
      type: "boolean",
      with: "auto",
      flex: 1,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.top}
          onChange={(event) => {
            const updatedRows = rows.map((row) => {
              if (row.id === params.row.id) {
                return { ...row, top: event.target.checked };
              }
              return row;
            });
            setRows(updatedRows);
          }}
        />
      ),
    },
    {
      field: "bottom",
      headerName: "Bottom",
      type: "boolean",
      flex: 1,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.bottom}
          onChange={(event) => {
            const updatedRows = rows.map((row) => {
              if (row.id === params.row.id) {
                return { ...row, bottom: event.target.checked };
              }
              return row;
            });
            setRows(updatedRows);
          }}
        />
      ),
      with: "auto",
    },
    {
      field: "measurement_Print",
      headerName: "Measurement Print",
      type: "boolean",
      flex: 1,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.measurement_Print}
          onChange={(event) => {
            const updatedRows = rows.map((row) => {
              if (row.id === params.row.id) {
                return { ...row, measurement_Print: event.target.checked };
              }
              return row;
            });
            setRows(updatedRows);
          }}
        />
      ),
    },
    {
      field: "special_item",
      headerName: "SpecialItem",
      type: "boolean",
      flex: 1,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.special_item}
          onChange={(event) => {
            const updatedRows = rows.map((row) => {
              if (row.id === params.row.id) {
                return { ...row, special_item: event.target.checked };
              }
              return row;
            });
            setRows(updatedRows);
          }}
        />
      ),
    },
    {
      field: "sketch_image",
      headerName: "SketchImage",
      editable: true,
      flex: 1,
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setTop({ ...Top, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "#dae1f3",
            height: "60px",
            px: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Typography sx={{ fontWeight: "600", color: "#5b626b" }}>
              Item
            </Typography>
            <TextField
              size="small"
              variant="outlined"
              placeholder="search"
              sx={{
                backgroundColor: "#fff",
                height: "45px",
                fontSize: "14px",
                borderRadius: "4px",
              }}
              InputProps={{
                sx: {
                  border: "none",
                  height: "45px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <IconButton
              onClick={handleClickOpen}
              aria-label="delete"
              size="medium"
              sx={{
                backgroundColor: "#3f51b5",
                color: "#fff",
                boxShadow:
                  "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  boxShadow:
                    "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              <AddIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              sx={{
                backgroundColor: "#3f51b5",
                color: "#fff",
                boxShadow:
                  "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  boxShadow:
                    "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              <RefreshIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <DataGrid
            sx={{
              minWidth: "980px",
              background: "#fff",
              border: "0",
              fontSize: "14px",
              "& .MuiDataGrid-columnHeader": {
                color: "#000",
                fontSize: "14px ",
                fontWeight: "bold !important",
              },
              "& .MuiDataGrid-columnHeaders": {
                maxHeight: "59px !important",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "0",
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            rows={rows}
            autoWidth
            columns={columns}
            checkboxSelection={true}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
          />
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ zIndex: "9999" }}
      >
        <DialogTitle id="alert-dialog-title">{"Item Master"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" padding={5}>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <TextField
                  label="Name"
                  name="Name"
                  placeHolder="Enter Name"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Rate"
                  name="rate"
                  placeHolder="Enter Rate"
                  type="number"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Top</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Top.Top}
                    label="Top"
                    name="Top"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>No</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Bottom</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Top.Bottom}
                    label="Bottom"
                    name="Bottom"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>No</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Measurement Print
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Top.MeasurementPrint}
                    label="MeasurementPrint"
                    name="MeasurementPrint"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>No</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    SpecialItem
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Top.SpecialItem}
                    label="SpecialItem"
                    name="SpecialItem"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>No</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="inherit">
            Cancle
          </Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Item_Mast;
