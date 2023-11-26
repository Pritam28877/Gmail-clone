import React from "react";
import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
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

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;
const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`;

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const config = {
    Host: "smtp.elasticemail.com",
    Username: "gsrdgsdg@yopmail.com",
    Password: "F76AF9A6C7719EAE23627EE70D28555BDFA0",
    Port: 2525,
  };
  const closeComposeMail = (e) => {
    setOpenDialog(false);
    e.preventDefault();
  };
  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        From: "growupdiscord@gmail.com",
        To: "growupdiscord@gmail.com",
        Subject: "hi",
        Body: "hi",
      }).then((message) => alert(message));
    }
  };
  return (
    <>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
        </Header>
        <RecipientsWrapper>
          <InputBase placeholder="Recipients" />
          <InputBase placeholder="Subject" />
        </RecipientsWrapper>
        <TextField
          multiline
          rows={25}
          sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        />
        <Footer>
          <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
          <DeleteOutline
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenDialog(false)}
          />
        </Footer>
      </Dialog>
    </>
  );
};

export default ComposeMail;
