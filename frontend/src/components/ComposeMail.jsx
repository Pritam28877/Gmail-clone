import React from "react";
import { Dialog, Box, Typography, styled, InputBase } from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";

const ComposeMail = () => {
  const dialogStyle = {
    height: "90%",
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    border: " 10px 10px 0 0",
  };
  const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
      font-size: 14px;
      font-weight: 500;
    }
  `;
  const RecipientsWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "10px 15px",
    "& > div": {
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      padding: "5px 0",
      "& > input": {
        marginLeft: "10px",
        border: "none",
        outline: "none",
        fontSize: "14px",
        fontWeight: 500,
        "&::placeholder": {
          color: "#b1b1b1",
        },
      },
    },
  });
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <Close fontSize="small" />
        </Header>
        <RecipientsWrapper>
          <InputBase placeholder="Recipients" />
          <InputBase placeholder="Subject" />
        </RecipientsWrapper>
        <Box>TextAraa</Box>
        <Box></Box>
      </Dialog>
    </>
  );
};

export default ComposeMail;
