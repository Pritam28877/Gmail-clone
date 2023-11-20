import React from "react";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposedButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 145,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > li > svg": {
    marginRight: 10,
  },
});
const SideBarContent = () => {
  return (
    <>
      <Container>
        <ComposedButton>
          <CreateOutlinedIcon />
          Compose
        </ComposedButton>
        <List>
          {SIDEBAR_DATA.map((data) => (
            <ListItem>
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          ))}
        </List>
        <ComposeMail />
      </Container>
    </>
  );
};

export default SideBarContent;
