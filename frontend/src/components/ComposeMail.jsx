import React from "react";
import { Dialog } from "@mui/material";

const ComposeMail = () => {
  const dialogStyle = {
    height: "90%",
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    border: " 10px 10px 0 0",
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        ComposeMail
      </Dialog>
    </>
  );
};

export default ComposeMail;
