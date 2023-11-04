import React from "react";
import { Drawer, styled } from "@mui/material";
import SideBarContent from "./SideBarContent";
const SideBar = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: "240px",
          boxSizing: "border-box",
          background: "#F5F5F5",
          borderRight: "none",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;
