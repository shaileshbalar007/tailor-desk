import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
import Header from "./Header";
import { Backdrop } from "@mui/material";

const MainLayout = ({ children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerClose = () => {
    setIsClosing(!isClosing);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    setIsClosing(!isClosing);
  };

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      {container && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            cursor: "pointer",
          }}
          open={isClosing}
          onClick={handleDrawerClose}
        >
          <Sidebar isClosing={isClosing} />
        </Backdrop>
      )}
      <Sidebar
        isClosing={isClosing}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      />
      <section className="mainlayout_main">
        <Box
          component="main"
          sx={{ flexGrow: 1, pt: "64px", pl: { md: "25px" } }}
        >
          {children}
        </Box>
      </section>
    </>
  );
};

export default MainLayout;
